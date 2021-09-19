import { mediaToLg } from "components/helpers/media-queries"
import { useEffect, useState } from "react"
import { useMedia as useCustomMedia } from "react-use"

const useMedia = () => {
  const [loaded, setLoaded] = useState(false)
  const isMobile = useCustomMedia(mediaToLg, false)

  useEffect(() => {
    if (!window) return

    if (!loaded) setLoaded(true)
  }, [])

  return { isMobile: isMobile && loaded }
}

export default useMedia
