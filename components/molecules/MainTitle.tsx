import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

const MainTitle = () => {
  return (
    <div className="mt-5 lg:mt-0 lg:ml-10 xl:ml-24">
      <h1 className="text-md lg:text-xxl text-center">
        Hi, I’m{' '}
        <span className="relative title z-10">
          Maykell
          <span className="bg-primary title-bg" />
        </span>
        , I’m a <br />
        <span className="flex items-center font-semibold lg:text-xxl title">
          <ChevronLeftIcon className="w-6 lg:w-11 text-primary" />
          Front-end Developer
          <span className="text-primary ml-1 lg:ml-2 -mr-1 lg:-mr-2">/</span>
          <ChevronRightIcon className="w-6 lg:w-11 text-primary" />
        </span>
      </h1>
    </div>
  )
}

export default MainTitle
