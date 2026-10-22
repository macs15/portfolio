import { CopyEmail } from "@/components/CopyEmail";
import { LocalTime } from "@/components/LocalTime";
import { RevealObserver } from "@/components/RevealObserver";
import { Screens } from "@/components/Screens";
import {
  process,
  projects,
  roles,
  site,
  stack,
  today,
  type Project,
} from "@/lib/content";

function GastifyPhones() {
  const g = "/work/gastify";
  return (
    <div className="phones">
      <div className="phone side left" data-ui>
        <img
          src={`${g}/home.jpg`}
          alt=""
          width={720}
          height={1566}
          loading="lazy"
        />
      </div>
      <div className="phone" data-ui>
        <video
          src={`${g}/tour.mp4`}
          poster={`${g}/tour-poster.jpg`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Gastify app tour"
        />
      </div>
      <div className="phone side right" data-ui>
        <img
          src={`${g}/summary.jpg`}
          alt=""
          width={720}
          height={1566}
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Projects without real screens get a custom frame instead; the rest show text only.
const frames: Partial<
  Record<Project["id"], { node: React.ReactNode; caption: string }>
> = {
  gastify: {
    node: <GastifyPhones />,
    caption: "Gastify as released on the App Store.",
  },
};

function Frame({ p }: { p: Project }) {
  if (p.screens)
    return (
      <Screens
        kind={p.id}
        name={p.name}
        screens={p.screens}
        note={p.screensNote}
      />
    );
  const f = frames[p.id];
  if (!f) return null;
  return (
    <figure className="frame">
      <div className="frame-body" data-kind={p.id}>
        {f.node}
      </div>
      <figcaption>{f.caption}</figcaption>
    </figure>
  );
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 12 12" aria-hidden>
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <main className="page" id="top">
        <header className="intro" data-reveal style={{ ["--d" as string]: 0 }}>
          <h1>{site.name}</h1>
          <p className="muted">
            {site.role} in {site.city}
          </p>
          <ul className="links">
            <li>
              <a className="link" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
            <li>
              <a className="link" href={site.linkedin} {...external}>
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link" href={site.github} {...external}>
                GitHub
              </a>
            </li>
          </ul>
        </header>

        <section
          className="block"
          aria-labelledby="today"
          data-reveal
          style={{ ["--d" as string]: 1 }}
        >
          <h2 id="today">Today</h2>
          {today.map((p) => (
            <p key={p.slice(0, 12)} className="muted">
              {p}
            </p>
          ))}
        </section>

        <section className="block wide" aria-labelledby="work">
          <h2 id="work" data-reveal style={{ ["--d" as string]: 2 }}>
            Work
          </h2>
          <div className="projects">
            {projects.map((p, i) => (
              <article
                className="project"
                key={p.id}
                aria-labelledby={`${p.id}-name`}
                data-reveal
                style={{ ["--d" as string]: i < 1 ? 3 : 0 }}
              >
                <header className="project-head">
                  <div>
                    <h3 id={`${p.id}-name`}>{p.name}</h3>
                    <p className="muted">{p.summary}</p>
                  </div>
                  <span className="meta">{p.meta}</span>
                </header>
                <Frame p={p} />
                <p className="muted">{p.description}</p>
                <p className="stack-line">{p.stack}</p>
                {p.credits?.map((c) => (
                  <p className="credit" key={c.name}>
                    Built with{" "}
                    {c.href ? (
                      <a className="link" href={c.href} {...external}>
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                    , {c.role}
                  </p>
                ))}
                {(p.cta || p.link) && (
                  <div className="actions">
                    {p.cta && (
                      <a className="button" href={p.cta.href} {...external}>
                        <svg viewBox="0 0 16 16" aria-hidden className="apple">
                          <path d="M11.2 8.5c0-1.6 1.3-2.3 1.4-2.4-.8-1.1-1.9-1.3-2.3-1.3-1-.1-1.9.6-2.4.6s-1.3-.6-2.1-.5c-1.1 0-2.1.6-2.6 1.6-1.1 1.9-.3 4.8.8 6.3.5.8 1.1 1.6 1.9 1.6s1.1-.5 2-.5 1.2.5 2 .5 1.4-.8 1.9-1.6c.6-.9.8-1.7.8-1.8 0 0-1.4-.6-1.4-2.5zM9.6 3.8c.4-.5.7-1.2.6-1.8-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.6 0 1.3-.4 1.7-.9z" />
                        </svg>
                        {p.cta.label}
                      </a>
                    )}
                    {p.link && (
                      <a className="link" href={p.link.href} {...external}>
                        {p.link.label}
                        <Arrow />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="block wide" aria-labelledby="process" data-reveal>
          <h2 id="process">How I work</h2>
          <ol className="list">
            {process.map((s) => (
              <li key={s.title}>
                <span>{s.title}</span>
                <p className="muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="split">
          <div className="split-main">
            <section className="block" aria-labelledby="experience" data-reveal>
              <h2 id="experience">Experience</h2>
              <ol className="list">
                {roles.map((r) => (
                  <li key={r.place} className="role">
                    <div className="role-line">
                      <span>{r.place}</span>
                      <span className="dots" aria-hidden />
                      <span className="meta">{r.years}</span>
                    </div>
                    <p className="muted">
                      {r.title}. {r.note}.
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="block" aria-labelledby="education" data-reveal>
              <h2 id="education">Education</h2>
              <div className="role">
                <div className="role-line">
                  <span>B.Sc. Software Engineering</span>
                  <span className="dots" aria-hidden />
                  <span className="meta">2024 – 2028</span>
                </div>
                <p className="muted">
                  Centro Universitário Leonardo da Vinci, in progress.
                </p>
              </div>
            </section>
          </div>

          <div className="split-side">
            <section className="block" aria-labelledby="stack" data-reveal>
              <h2 id="stack">Stack</h2>
              <ul className="chips">
                {stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>

            <section className="block" aria-labelledby="contact" data-reveal>
              <h2 id="contact">Contact</h2>
              <p className="muted">
                Hiring for a frontend role? Tell me about the product and the
                team.
              </p>
              <CopyEmail email={site.email} />
              <ul className="links">
                <li>
                  <a className="link" href={site.linkedin} {...external}>
                    LinkedIn
                    <Arrow />
                  </a>
                </li>
                <li>
                  <a className="link" href={site.github} {...external}>
                    GitHub
                    <Arrow />
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Frontend role")}`}
                  >
                    Email
                    <Arrow />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <footer className="footer">
          <span>
            {site.city}
            <LocalTime timeZone={site.timeZone} />
          </span>
          <span>© 2026</span>
        </footer>
      </main>
      <RevealObserver />
    </>
  );
}
