import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Analytics } from '@vercel/analytics/next'
import { NavigationProvider } from 'components/contexts/navigationContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Analytics />
      <Component {...pageProps} />
    </NavigationProvider>
  )
}
export default MyApp
