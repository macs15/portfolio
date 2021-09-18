import { DownloadIcon } from '@heroicons/react/outline'
import Button from 'components/atoms/Button'
import NavigationItemDesktop from 'components/atoms/NavigationItemDesktop'
import { useWindowScroll } from 'react-use'

const NavigationDesktop = () => {
  const { y } = useWindowScroll()
  const hasShadow = y > 20 ? 'shadow-header' : ''

  return (
    <nav className={`desktop-header ${hasShadow} py-2 bg-gray sticky top-0 w-full mt-7`}>
      <div className="flex items-center h-full mx-11">
        <img className="h-full" src="/desktop-logo.svg" alt="Logo" />

        <div className="flex-1 flex justify-center items-center">
          <NavigationItemDesktop href="#" text="Home" active />
          <NavigationItemDesktop className="ml-5" href="#projects" text="Projects" />
          <NavigationItemDesktop className="ml-5" href="#about" text="About" />
          <NavigationItemDesktop className="ml-5" href="#contact" text="Contact" />
        </div>

        <Button text="Get resume">
          <DownloadIcon className="w-5 ml-2" />
        </Button>
      </div>
    </nav>
  )
}

export default NavigationDesktop
