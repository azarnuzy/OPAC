import Footer from '../components/General/Footer'
import Navbar from '../components/General/Navbar'
import Topbar from '../components/General/Topbar'
import Content from '../components/SearchResult/Content'
import TopSearchResult from '../components/SearchResult/TopSearchResult'

function SearchResult() {
  return (
    <>
      <Topbar />
      <Navbar />
      <TopSearchResult />
      <Content />
      <Footer />
    </>
  )
}

export default SearchResult
