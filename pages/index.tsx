import HomeBackground from 'components/molecules/HomeBackground'
import MetaTags from 'components/molecules/metatags'
import NavigationMenu from 'components/organisms/NavigationMenu'
import AboutView from 'components/templates/AboutView'
import ContactView from 'components/templates/ContactView'
import HomeView from 'components/templates/HomeView'
import ProjectsView from 'components/templates/ProjectsView'

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
    </>
  )
}

export default HomePage
