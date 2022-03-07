import '../styles/globals.css'
import Navbar from './Navbar.js'

function MyApp({ Component, pageProps }) {
  return <div>
  <Navbar />
  <Component {...pageProps} />
  </div>
}

export default MyApp
