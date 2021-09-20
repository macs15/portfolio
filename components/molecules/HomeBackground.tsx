import useMedia from 'components/hooks/useMedia'
import Image from 'next/image'

const HomeBackground = () => {
  const { isMobile } = useMedia()

  return !isMobile ? (
    <div className="w-full flex justify-center">
      <div className="absolute main-container w-full">
        <Image
          blurDataURL='/programming-blur.png'
          placeholder="blur"
          objectFit="cover"
          layout="fill"
          src="/programming.png"
          alt="Programming background"
        />
      </div>
    </div>
  ) : null
}

export default HomeBackground
