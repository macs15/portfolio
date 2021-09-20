import { github, linkedIn, twitter } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'
import { NETWORK_ICON_SIZE } from 'components/helpers/constants'
import { FC } from 'react'

const SocialNetworkList: FC<SocialNetworkListProps> = ({ isVertical = false }) => {
  const className = isVertical ? '' : 'ml-8'

  return (
    <>
      <Link color="transparent" href="https://github.com/macs15">
        <IconWrapper className="fill-color text-thin hover:text-primary transition-colors duration-200 ease-in-out" size={NETWORK_ICON_SIZE}>
          {github}
        </IconWrapper>
      </Link>
      <Link className={className} color="transparent" href="https://www.linkedin.com/in/macs15/">
        <IconWrapper className="fill-color text-thin hover:text-primary transition-colors duration-200 ease-in-out" size={NETWORK_ICON_SIZE}>
          {linkedIn}
        </IconWrapper>
      </Link>
      <Link className={className} color="transparent" href="https://twitter.com/16Macs">
        <IconWrapper className="fill-color text-thin hover:text-primary transition-colors duration-200 ease-in-out" size={NETWORK_ICON_SIZE}>
          {twitter}
        </IconWrapper>
      </Link>
    </>
  )
}

type SocialNetworkListProps = {
  isVertical?: boolean
}

export default SocialNetworkList
