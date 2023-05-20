import Navigation from '@/components/navigation/navigation.component'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navigation/>
     <Component  {...pageProps} />
    </>
  )
}
