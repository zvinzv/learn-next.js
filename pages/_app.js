import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Layout>
      
    </>
  )
}
