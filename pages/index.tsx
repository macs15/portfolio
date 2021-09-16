import MetaTags from 'components/molecules/metatags'
import NavigationMobile from 'components/organisms/NavigationMobile'
import HomeView from 'components/templates/HomeView'

const HomePage = () => {
  return (
    <>
      <MetaTags />
      <NavigationMobile />
      <div className="pt-5 px-5 h-screen">
        <HomeView />
      </div>
    </>
  )
}

export default HomePage
