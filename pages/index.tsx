import MetaTags from 'components/molecules/metatags'
import NavigationMenu from 'components/organisms/NavigationMenu'
import HomeView from 'components/templates/HomeView'
import ProjectsView from 'components/templates/ProjectsView'

const HomePage = () => {
  return (
    <>
      <MetaTags />
      <NavigationMenu />
      <main className="mx-5 h-full">
        <HomeView />
        <ProjectsView />
      </main>
    </>
  )
}

export default HomePage
