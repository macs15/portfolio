import { github, linkedIn, twitter } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'
import useMedia from 'components/hooks/useMedia'

const NETWORK_ICON_SIZE = '40px'

const SocialNetworks = () => {
  const { isMobile } = useMedia()

  return isMobile ? (
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
  ) : null
}

export default SocialNetworks
