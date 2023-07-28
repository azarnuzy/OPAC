import { Route, Routes } from 'react-router-dom'
import Layout from '../components/HandleRoute/Layout'
import Home from '../pages/Home'

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
      </Route>
    </Routes>
  )
}
