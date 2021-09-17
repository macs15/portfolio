import { memo } from 'react'
import { FC } from 'react'

import { IconInterface } from './icons'

const IconWrapper: FC<IconWrapperProps> = memo(
  ({ className = '', id, size = '1.25em', color = 'currentColor', onClick, children }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={children?.vb}
        className={className}
        id={id}
        onClick={onClick}
        fill={color}
      >
        {children?.code}
      </svg>
    )
  }
)

interface IconWrapperProps {
  size?: string
  color?: string
  onClick?: () => void
  id?: string
  className?: string
  children: IconInterface | null
}

export default IconWrapper
