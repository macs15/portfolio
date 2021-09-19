import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'
import { mediaToLg } from 'components/helpers/media-queries'
import MainTitle from 'components/molecules/MainTitle'
import { useMedia } from 'react-use'

const HomeView = () => {
  const isMobile = useMedia(mediaToLg, false)

  return (
    <div id="home" className="flex flex-col home">
      <Logo />
      <div className="flex items-center justify-center flex-col lg:flex-row flex-1">
        <img className="w-1/2 banner-image" src="/maykell-carrillo.png" alt="Maykell carrillo" />
        <MainTitle />

        {isMobile && (
          <Button className="mt-5" text="Get resume">
            <DownloadIcon className="w-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default HomeView
