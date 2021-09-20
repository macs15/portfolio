import { BriefcaseIcon, HomeIcon, MailIcon, UserIcon } from '@heroicons/react/outline'
import NavigationItemMobile from 'components/atoms/NavigationItemMobile'

const NavigationMobile = () => {
  return (
    <nav className="fixed bottom-0 mobile-header w-full">
      <div className="flex h-full">
        <NavigationItemMobile active href="#" text="home">
          <HomeIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#projects" text="Projects">
          <BriefcaseIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#about" text="About">
          <UserIcon className="w-6" />
        </NavigationItemMobile>
        <NavigationItemMobile href="#contact" text="Contact">
          <MailIcon className="w-6" />
        </NavigationItemMobile>
      </div>
    </nav>
  )
}

export default NavigationMobile
