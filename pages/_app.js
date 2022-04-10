import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <div>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </div>
}

export default MyApp
