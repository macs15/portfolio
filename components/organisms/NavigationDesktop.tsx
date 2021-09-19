import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'

const NavigationDesktop = () => {
  return (
    <nav className="desktop-header sticky w-full">
      <div className="flex items-center h-full mx-11">
        <img src="/desktop-logo.svg" alt="Logo" />

        <div className="flex-1 flex justify-center items-center">
          <NavigationDesktop />
          <NavigationDesktop />
          <NavigationDesktop />
          <NavigationDesktop />
        </div>

        <Button text="Get resume">
          <DownloadIcon className="w-5 ml-2" />
        </Button>
      </div>
    </nav>
  )
}

export default NavigationDesktop
