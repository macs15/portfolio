import { HomeIcon } from '@heroicons/react/outline'

const NavigationMobile = () => {
  return (
    <nav className="absolute bottom-0 mobile-header w-full">
      <div className="flex h-full">
        <a href="#" className="flex-1 flex flex-col items-center justify-center text-xs font-bold">
          <HomeIcon className="w-6" />
          Home
        </a>
        <a href="#" className="flex-1 flex flex-col items-center justify-center text-xs font-bold">
          <HomeIcon className="w-6" />
          Home
        </a>
        <a href="#" className="flex-1 flex flex-col items-center justify-center text-xs font-bold">
          <HomeIcon className="w-6" />
          Home
        </a>
        <a href="#" className="flex-1 flex flex-col items-center justify-center text-xs font-bold">
          <HomeIcon className="w-6" />
          Home
        </a>
      </div>
    </nav>
  )
}

export default NavigationMobile
