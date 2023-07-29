import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'

export default function RoutesComponents() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/search'
          element={<SearchResult />}
        />
      </Route>
    </Routes>
  )
}
