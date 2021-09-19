import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'
import useMedia from 'components/hooks/useMedia'
import MainTitle from 'components/molecules/MainTitle'
import Image from 'next/image'

const HomeView = () => {
  const { isMobile } = useMedia()

  return (
    <>
      <div id="home" className="flex flex-col home relative">
        {/* {!isMobile && (
          
        )} */}
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
            <Button className="mt-5" text="Get resume">
              <DownloadIcon className="w-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default HomeView
