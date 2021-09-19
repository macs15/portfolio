import { FC } from 'react'

const NavigationItemDesktop: FC<NavigationItemDesktop> = ({ className = '', href, text, active = false }) => {
  return (
    <div className={`${className} relative z-10`}>
      <a className="anchor" href={href}>{text}</a>
      {active && <span className="title-bg bg-primary"></span>}
    </div>
  )
}

type NavigationItemDesktop = {
  className?: string
  href: string
  text: string
  active?: boolean
}

export default NavigationItemDesktop
