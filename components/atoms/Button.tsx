import { FC } from 'react'

const Button: FC<ButtonProps> = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick} className="bg-accent flex items-center text-base font-semibold px-2 py-1 rounded-md" type="button">
      {text}
      {icon}
    </button>
  )
}

type ButtonProps = {
  text: string
  onClick?: () => void
  icon?: JSX.Element

}

export default Button
