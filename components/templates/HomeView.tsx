import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'

const HomeView = () => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <img className="h-12 max-w-full" src="/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center justify-center flex-col flex-1">
        <img className="w-1/2" src="/maykell-carrillo.png" alt="Maykell carrillo" />
        <div>
          <h1 className="text-md text-center">
            Hi, I’m Maykell, I’m a <br />
            <span className="text-primary">&lt;</span>Front-end Developer{' '}
            <span className="text-primary">/&gt;</span>
          </h1>
        </div>
        <Button text="Get resume" icon={<DownloadIcon className="w-5 ml-2" />} />
      </div>
    </div>
  )
}

export default HomeView
