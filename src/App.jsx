import './App.css'
import { Route, Routes } from 'react-router-dom'
import RoutesComponents from './config/RoutesComponents'

function App() {
  return (
    <Routes>
      <Route
        path='/*'
        element={<RoutesComponents />}
      />
    </Routes>
  )
}

export default App
