import { DownloadIcon } from '@heroicons/react/outline'
import Link from 'components/atoms/Link'
import NavigationItemDesktop from 'components/atoms/NavigationItemDesktop'
import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

const NavigationDesktop = () => {
  const { y } = useWindowScroll()
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const hasScrolled = y > 20

    if (hasScrolled && hasShadow) return
    if (!hasScrolled && !hasShadow) return

    if (hasScrolled && !hasShadow) {
      setHasShadow(true)
      return
    }

    if (!hasShadow) return

    setHasShadow(false)
  }, [y])

  return (
    <nav
      className={`desktop-header ${hasShadow ? 'shadow-header' : ''} py-2 sticky top-0 w-full mt-7`}
    >
      <div className="flex items-center h-full mx-11">
        <a href="#">
          <img className=" h-10" src="/desktop-logo.svg" alt="Logo" />
        </a>

        <div className="flex-1 flex justify-center items-center">
          <NavigationItemDesktop href="#" text="Home" active />
          <NavigationItemDesktop className="ml-5" href="#projects" text="Projects" />
          <NavigationItemDesktop className="ml-5" href="#about" text="About" />
          <NavigationItemDesktop className="ml-5" href="#contact" text="Contact" />
        </div>

        <Link className="active:translate-y-1 transform transition-transform duration-75 ease-linear" href="/maykell-carrillo-cv.pdf" text="Get resume" download>
          <DownloadIcon className="w-5 ml-2" />
        </Link>
      </div>
    </nav>
  )
}

export default NavigationDesktop
