import Footer from '../components/General/Footer'
import Topbar from '../components/General/Topbar'
import Header from '../components/Home/Header'
import MetaTags from '../components/SEO/MetaTags'
import AlertProvider from '../components/context/alert-context'

function Home() {
  return (
    <div className='h-screen'>
      <MetaTags
        title='Online Public Access Catalog UPI'
        description='Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.'
        keywords='online catalog, UPI library, academic resources, searching, availability updates'
        ogImage='/assets/home.png'
      />
      <Topbar />
      <AlertProvider>
        <Header />
      </AlertProvider>
      <Footer />
    </div>
  )
}

export default Home
