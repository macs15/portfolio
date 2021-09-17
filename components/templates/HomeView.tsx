import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'
import Logo from 'components/atoms/Logo'

const HomeView = () => {
  return (
    <div id="home" className="flex flex-col home">
      <Logo />
      <div className="flex items-center justify-center flex-col flex-1">
        <img className="w-1/2" src="/maykell-carrillo.png" alt="Maykell carrillo" />
        <div className="mt-5">
          <h1 className="text-md text-center">
            Hi, I’m Maykell, I’m a <br />
            <span className="text-primary">&lt;</span>Front-end Developer{' '}
            <span className="text-primary">/&gt;</span>
          </h1>
        </div>
        <Button className="mt-5" text="Get resume">
          <DownloadIcon className="w-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default HomeView
