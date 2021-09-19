import { mediaToLg } from 'components/helpers/media-queries'
import { useEffect, useState } from 'react'
import { useMedia } from 'react-use'

import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

const NavigationMenu = () => {
  const [loaded, setLoaded] = useState(false)
  const isMobile = useMedia(mediaToLg, false)

  useEffect(() => {
    if (!window) return

    if (!loaded) setLoaded(true)
  }, [])

  return (
    isMobile && loaded ? <NavigationMobile /> : <NavigationDesktop />
  )
}

export default NavigationMenu
