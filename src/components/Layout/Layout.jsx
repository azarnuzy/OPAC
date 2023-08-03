import { Outlet } from 'react-router-dom'
import ScrollToTop from '../General/ScrollToTop'

function Layout() {
  return (
    <main className='App'>
      <ScrollToTop />
      <Outlet />
    </main>
  )
}

export default Layout
