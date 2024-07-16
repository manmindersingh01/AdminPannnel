import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>


        {/* <NavbarDefault />
        <Inputform />
        <Gallery /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Layout />}>
            <Route path="dash" element={<Dashboard />} />

          </Route>


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
