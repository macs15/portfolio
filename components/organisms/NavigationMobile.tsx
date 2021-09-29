import { BriefcaseIcon, HomeIcon, MailIcon, UserIcon } from '@heroicons/react/outline'
import NavigationItemMobile from 'components/atoms/NavigationItemMobile'
import { useNavigationContext } from 'components/contexts/navigationContext'

const NavigationMobile = () => {
  const { active } = useNavigationContext()

  return (
    <nav className="fixed bottom-0 mobile-header w-full">
      <div className="flex h-full">
        <NavigationItemMobile active={active === 'home'} href="#" text="Home">
          <HomeIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#projects" text="Projects" active={active === 'projects'}>
          <BriefcaseIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#about" text="About" active={active === 'about'}>
          <UserIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#contact" text="Contact" active={active === 'contact'}>
          <MailIcon className="w-6" />
        </NavigationItemMobile>
      </div>
    </nav>
  )
}

export default NavigationMobile
