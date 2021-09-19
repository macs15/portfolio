import useMedia from 'components/hooks/useMedia'

import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

const NavigationMenu = () => {
  const { isMobile } = useMedia()

  return isMobile ? <NavigationMobile /> : <NavigationDesktop />
}

export default NavigationMenu
