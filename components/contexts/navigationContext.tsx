import { createContext, FC, useContext, useState } from 'react'

export type MenuItem = 'home' | 'projects' | 'about' | 'contact'

interface ContextProps {
  active: MenuItem
  setActive: (active: MenuItem) => void
}

export const NavigationContext = createContext({} as ContextProps)

export const NavigationProvider: FC = ({ children }) => {
  const [active, setActive] = useState<MenuItem>('home')

  return (
    <NavigationContext.Provider
      value={{
        active,
        setActive
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  if (typeof context === 'undefined') {
    throw new Error('useNavigationContext must be use within a NavigationProvider')
  }
  return context
}
