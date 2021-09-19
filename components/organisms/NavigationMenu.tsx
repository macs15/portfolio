import { mediaToLg } from 'components/helpers/media-queries'
import { useMedia } from 'react-use'

import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

const NavigationMenu = () => {
  const isMobile = useMedia(mediaToLg)

  return <>{isMobile ? <NavigationMobile /> : <NavigationDesktop />}</>
}

export default NavigationMenu
