import Navb from '../components/navbar/Navb'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Navb>
      <Component {...pageProps} />
    </Navb>
  )
}

export default MyApp
