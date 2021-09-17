import { FC } from 'react'

const NavigationItemMobile: FC<NavigationItemMobileProps> = ({
  children,
  text,
  href,
  className = '',
  active = false
}) => {
  const activeClassname = active ? 'text-primary' : 'text-paragraph' 
  return (
    <a href={href} className={`${activeClassname} ${className} flex-1 flex flex-col items-center justify-center text-xs font-bold`}>
      {children}
      {text}
    </a>
  )
}

type NavigationItemMobileProps = {
  text: string
  href: string
  className?: string
  active?: boolean
}

export default NavigationItemMobile
