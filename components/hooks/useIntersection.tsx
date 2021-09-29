import { MenuItem, useNavigationContext } from 'components/contexts/navigationContext'
import { useEffect, useRef } from 'react'
import { useIntersection as useCustomIntersection } from 'react-use'

const useIntersection = (sectionId: MenuItem) => {
  const { setActive, active: activeItem } = useNavigationContext()
  const ref = useRef(null)
  const intersection = useCustomIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  })

  useEffect(() => {
    if (!intersection) return

    if (intersection.isIntersecting && activeItem !== sectionId) {
      setActive(sectionId)
    }
  }, [intersection])

  return {
    ref
  }
}

export default useIntersection
