// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Topbar from '@/components/TopBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
