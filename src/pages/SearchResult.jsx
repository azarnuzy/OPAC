import Footer from '../components/General/Footer'
import Navbar from '../components/General/Navbar'
import Topbar from '../components/General/Topbar'
import MetaTags from '../components/SEO/MetaTags'
import Content from '../components/SearchResult/Content'
import TopSearchResult from '../components/SearchResult/TopSearchResult'

function SearchResult() {
  return (
    <>
      <MetaTags
        title='Online Public Access Catalog UPI'
        description='Discover and access a world of knowledge with the Online Public Access Catalog UPI. This intuitive web application provides easy-to-use searching, real-time availability updates, and personalized profiles for students and faculty at Universitas Pendidikan Indonesia.'
        keywords='online catalog, UPI library, academic resources, searching, availability updates'
        ogImage='/assets/home.png'
      />
      <Topbar />
      <Navbar />
      <TopSearchResult />
      <Content />
      <Footer />
    </>
  )
}

export default SearchResult
