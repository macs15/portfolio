import { HandIcon } from '@heroicons/react/outline'
import { github, linkedIn, twitter } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'

const NETWORK_ICON_SIZE = '40px'

const ContactContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1">
        <p className="text-paragraph text-base font-medium">Let's do something amazing together</p>
        <h3 className="text-lg">Get in touch</h3>
        <Link
          text="Say Hello"
          className="mt-5"
          borderColor="primary"
          color="transparent"
          href="mailto:maykellcarrillo@gmail.com"
        >
          <HandIcon className="w-5 ml-2" />
        </Link>
      </div>
      <footer>
        <div className="flex justify-center">
          <Link color="transparent" href="https://github.com/macs15">
            <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
              {github}
            </IconWrapper>
          </Link>
          <Link className="ml-8" color="transparent" href="https://www.linkedin.com/in/macs15/">
            <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
              {linkedIn}
            </IconWrapper>
          </Link>
          <Link className="ml-8" color="transparent" href="https://twitter.com/16Macs">
            <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
              {twitter}
            </IconWrapper>
          </Link>
        </div>

        <div className="mt-7 relative mx-auto footer-container">
          <div className="flex justify-center items-center mb-3">
            <span className="border-b border-thin cross-line"></span>
            <p className="bg-gray px-2 text-xs font-medium">
              Made with 💜 by Maykell Carrillo © 2021
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactContent
