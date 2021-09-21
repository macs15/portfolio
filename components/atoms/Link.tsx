import { FC } from 'react'

const Link: FC<ButtonProps> = ({ text = '', className, color = 'accent', borderColor = 'transparent', href, children, download = false }) => {
  const activeColor: Record<Color, string> = {
    'primary': 'bg-primary',
    'accent': 'bg-accent',
    'transparent': 'bg-transparent'
  }

  const activeBorder: Record<Color, string> = {
    'primary': 'border-primary border',
    'accent': 'border-accent border',
    'transparent': 'border-none'
  }

  return (
    <a
      href={href}
      download={download}
      className={`${activeColor[color]} ${activeBorder[borderColor]} flex items-center text-base font-semibold px-2 py-1 rounded-md ${className} transition-colors duration-200 ease-in-out`}
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
  download?: boolean
  href: string
}

export type Color = 'primary' | 'accent' | 'transparent'

export default Link
