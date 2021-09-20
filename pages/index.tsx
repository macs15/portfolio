import MetaTags from 'components/molecules/metatags'
import SocialNetworksDesktop from 'components/organisms/SocialNetworksDesktop'
import AboutView from 'components/templates/AboutView'
import ContactView from 'components/templates/ContactView'
import HomeView from 'components/templates/HomeView'
import ProjectsView from 'components/templates/ProjectsView'
import dynamic from 'next/dynamic'

const NavigationMenu = dynamic(() => import('components/organisms/NavigationMenu'))
const HomeBackground = dynamic(() => import('components/molecules/HomeBackground'))

const HomePage = () => {
  return (
    <>
      <MetaTags />
      <NavigationMenu />
      <HomeBackground />

      <main className="mx-5 h-full">
        <HomeView />
        <ProjectsView />
        <AboutView />
        <ContactView />
      </main>

      <SocialNetworksDesktop />
    </>
  )
}

export default HomePage
