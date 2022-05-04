import '../styles/globals.css'
import LogRocket from 'logrocket'

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    LogRocket.init('vt0abw/nathanfriemeldotcom')
  }
  
  return <Component {...pageProps} />
}

export default MyApp
