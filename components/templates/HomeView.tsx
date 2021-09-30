import { DownloadIcon } from '@heroicons/react/outline'
import Link from 'components/atoms/Link'
import Logo from 'components/atoms/Logo'
import useIntersection from 'components/hooks/useIntersection'
import useMedia from 'components/hooks/useMedia'
import MainTitle from 'components/molecules/MainTitle'
import Image from 'next/image'

const HomeView = () => {
  const { ref } = useIntersection('home')
  const { isMobile } = useMedia()

  return (
    <>
      <div ref={ref} id="home" className="flex flex-col home relative">
        <Logo />
        <div className="flex items-center justify-center flex-col lg:flex-row flex-1 z-10">
          <div className="w-1/2 lg:w-1/3 xl:w-1/4 banner-image relative">
            <Image
              layout="fill"
              className="image"
              src="/maykell-carrillo.png"
              alt="Maykell carrillo"
              objectFit="contain"
            />
          </div>
          <MainTitle />

          {isMobile && (
            <Link
              className="mt-5 active:translate-y-1 transform transition-transform duration-75 ease-linear"
              href="/maykell-carrillo-cv.pdf"
              text="Get resume"
              rel="noopener noreferrer nofollow"
            >
              <DownloadIcon className="w-5 ml-2" />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default HomeView
