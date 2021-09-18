import { FC } from 'react'

const Link: FC<ButtonProps> = ({ text = '', className, color = 'accent', borderColor = 'transparent', href, children }) => {
  const activeColor: Record<Color, string> = {
    'primary': 'bg-primary',
    'accent': 'bg-accent',
    'transparent': 'bg-transparent'
  }

  const activeBorder: Record<Color, string> = {
    'primary': 'border-primary',
    'accent': 'border-accent',
    'transparent': 'border-none'
  }

  return (
    <a
      href={href}
      className={`${className} ${activeColor[color]} ${activeBorder[borderColor]} flex items-center text-base font-semibold px-2 py-1 rounded-md`}
      target='_blank'
    >
      {text && <p>{text}</p>}
      {children}
    </a>
  )
}

type ButtonProps = {
  text?: string
  color?: Color
  borderColor?: Color
  className?: string
  href: string
}

type Color = 'primary' | 'accent' | 'transparent'

export default Link
