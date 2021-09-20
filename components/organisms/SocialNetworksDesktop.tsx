import useMedia from "components/hooks/useMedia"
import SocialNetworkList from "components/molecules/SocialNetworkList"

const SocialNetworksDesktop = () => {
  const { isMobile } = useMedia()

  return !isMobile ? (
    <div className="flex flex-col items-center justify-center ml-8 bottom-0 fixed z-10 vertical-social">
      <SocialNetworkList isVertical />
    </div>
  ) : null
}

export default SocialNetworksDesktop
