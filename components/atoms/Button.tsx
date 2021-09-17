import { FC } from 'react'

const Button: FC<ButtonProps> = ({ text, className, color = 'accent', onClick, children }) => {
  const activeColor: Record<Color, string> = {
    'primary': 'bg-primary',
    'accent': 'bg-accent',
    'transparent': 'bg-transparent'
  }

  return (
    <button
      onClick={onClick}
      className={`${className} ${activeColor[color]} flex items-center text-base font-semibold px-2 py-1 rounded-md`}
      type="button"
    >
      <p>{text}</p>
      {children}
    </button>
  )
}

type ButtonProps = {
  text: string
  color?: Color
  className?: string
  onClick?: () => void
}

type Color = 'primary' | 'accent' | 'transparent'

export default Button
