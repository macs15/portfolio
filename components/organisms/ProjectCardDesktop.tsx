/* eslint-disable react/no-danger */
import ProjectsButtons from 'components/molecules/ProjectsButtons'
import TechnologiesList from 'components/molecules/TechnologiesList'
import { ProjectData } from 'data/projects-data'
import Image from 'next/image'
import { FC } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination, Autoplay, Navigation])

const ProjectCardDesktop: FC<ProjectCardDesktopProps> = ({ projects }) => {
  return (
    <section className="mx-auto carousel-container flex my-10">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        navigation
        pagination={{ clickable: true }}
        className="flex-1"
      >
        {projects.map(({ title, image, id, description, technologies, demoUrl, repoUrl }) => (
          <SwiperSlide key={id}>
            <div className="flex justify-center items-center flex-col h-full">
              <div className="w-full flex items-center justify-center mb-10">
                <div className="flex w-1/3 flex-col bg-background rounded-md p-5 lg:-mr-40 xl:-mr-20 z-10 shadow-card">
                  <h3 className="text-sm">{title}</h3>
                  <p
                    className="text-paragraph mt-5"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />

                  <TechnologiesList technologies={technologies} />
                </div>

                <a
                  href={demoUrl}
                  target="_blank"
                  className="lg:w-1/2 relative rounded-md shadow-card project-image"
                  style={{ height: '40vh' }}
                >
                  <Image
                    layout="fill"
                    objectFit="fill"
                    placeholder="blur"
                    className="rounded-md object-fill h-full"
                    src={`/projects/${image}`}
                    blurDataURL={`/projects/${image}`}
                    alt={title}
                  />
                </a>
              </div>
              <ProjectsButtons linkText="View Demo" demoUrl={demoUrl} repoUrl={repoUrl} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

type ProjectCardDesktopProps = {
  projects: ProjectData[]
}

export default ProjectCardDesktop
