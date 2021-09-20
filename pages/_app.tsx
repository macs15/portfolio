import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
