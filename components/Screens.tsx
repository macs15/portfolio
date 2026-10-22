"use client";

import { useEffect, useRef, useState } from "react";
import { Segmented } from "./Segmented";

import type { Screen } from "@/lib/content";

type Overflow = "none" | "start" | "end" | "both";

// Real screens of a project, switched with a segmented control. Every image
// stays mounted so switching is instant and can crossfade. Screens with a clip
// play it only while the gallery is on screen and that tab is selected.
export function Screens({
  kind,
  name,
  screens,
  note,
}: {
  kind: string;
  name: string;
  screens: Screen[];
  note?: string;
}) {
  const [active, setActive] = useState(screens[0].id);
  const current = screens.find((s) => s.id === active) ?? screens[0];
  const tabs = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const videos = useRef<Record<string, HTMLVideoElement | null>>({});
  const [overflow, setOverflow] = useState<Overflow>("none");
  const [inView, setInView] = useState(false);
  const [still, setStill] = useState(false);

  // On narrow screens the tabs scroll; fade whichever edge hides more tabs.
  useEffect(() => {
    const el = tabs.current;
    if (!el) return;
    const update = () => {
      const start = el.scrollLeft > 2;
      const end = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
      setOverflow(
        start && end ? "both" : start ? "start" : end ? "end" : "none",
      );
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Keep the selected tab in view when it changes.
  useEffect(() => {
    const el = tabs.current;
    const btn = el?.querySelector<HTMLElement>('[aria-checked="true"]');
    if (!el || !btn || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({
      left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  // Only spend battery on clips someone can see; respect reduced motion.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(el);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setStill(mq.matches);
    onMotion();
    mq.addEventListener("change", onMotion);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  useEffect(() => {
    for (const [id, v] of Object.entries(videos.current)) {
      if (!v) continue;
      if (id === active && inView && !still) {
        v.play().catch(() => {});
      } else {
        v.pause();
        if (id !== active) v.currentTime = 0;
      }
    }
  }, [active, inView, still]);

  return (
    <figure className="frame">
      <div
        className="frame-body screens"
        data-kind={kind}
        style={
          current.field
            ? ({ "--field": current.field } as React.CSSProperties)
            : undefined
        }
      >
        <div className="stage" ref={stage}>
          {screens.map((s, i) =>
            s.wip ? (
              <div
                key={s.id}
                className="shot shot-wip"
                data-active={s.id === active}
                aria-hidden={s.id !== active}
              >
                <span>{s.label}</span>
                <span className="shot-wip-note">Recording in progress</span>
              </div>
            ) : (
              <a
                key={s.id}
                href={s.src}
                target="_blank"
                rel="noopener noreferrer"
                className={s.phone ? "shot shot-phone" : "shot"}
                data-ui
                data-active={s.id === active}
                aria-hidden={s.id !== active}
                tabIndex={s.id === active ? 0 : -1}
                aria-label={`${s.alt}. Opens full size.`}
              >
                {s.video && !still ? (
                  <video
                    ref={(v) => {
                      videos.current[s.id] = v;
                    }}
                    src={s.video}
                    poster={s.src}
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? "metadata" : "none"}
                    aria-hidden
                  />
                ) : (
                  <img
                    src={s.src}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
              </a>
            ),
          )}
        </div>
        {screens.length > 0 && (
          <div className="screens-tabs" ref={tabs} data-overflow={overflow}>
            <Segmented
              label={`${name} screens`}
              options={screens.map((s) => ({ value: s.id, label: s.label }))}
              value={active}
              onChange={setActive}
            />
          </div>
        )}
      </div>
      <figcaption>
        <span aria-live="polite">{current.caption}</span>
        {note && <span className="screens-note"> {note}</span>}
      </figcaption>
    </figure>
  );
}
