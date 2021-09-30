import { github, linkedIn, twitter } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'
import { NETWORK_ICON_SIZE } from 'components/helpers/constants'
import useMedia from 'components/hooks/useMedia'

const SocialNetworks = () => {
  const { isMobile } = useMedia()

  return isMobile ? (
    <div className="flex justify-center">
      <Link rel="noopener noreferrer" color="transparent" href="https://github.com/macs15">
        <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
          {github}
        </IconWrapper>
      </Link>
      <Link
        rel="noopener noreferrer"
        className="ml-8"
        color="transparent"
        href="https://www.linkedin.com/in/macs15/"
      >
        <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
          {linkedIn}
        </IconWrapper>
      </Link>
      <Link
        rel="noopener noreferrer"
        className="ml-8"
        color="transparent"
        href="https://twitter.com/16Macs"
      >
        <IconWrapper className="fill-color text-thin" size={NETWORK_ICON_SIZE}>
          {twitter}
        </IconWrapper>
      </Link>
    </div>
  ) : null
}

export default SocialNetworks
