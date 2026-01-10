import { HandIcon } from '@heroicons/react/outline'
import Link from 'components/atoms/Link'
import dynamic from 'next/dynamic'

const SocialNetworks = dynamic(() => import('./SocialNetworks'))

const ContactContent = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1">
        <p className="text-paragraph text-base font-medium">Let's do something amazing together</p>
        <h3 className="text-lg">Get in touch</h3>
        <Link
          text="Say Hello"
          className="mt-5 hover:bg-primary"
          borderColor="primary"
          color="transparent"
          rel="noopener noreferrer"
          href="mailto:maykellcarrillo@gmail.com"
        >
          <HandIcon className="w-5 ml-2" />
        </Link>
      </div>
      <footer>
        <SocialNetworks />

        <div className="mt-7 relative mx-auto footer-container">
          <div className="flex justify-center items-center mb-3">
            <span className="border-b border-thin cross-line"></span>
            <p className="bg-gray px-2 text-xs font-medium">
              Made with 💜 by Maykell Carrillo © {currentYear}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactContent
