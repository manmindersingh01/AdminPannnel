import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FrequentEvents from './pages/FrequentEvents';
import Events from './pages/Events';
import PageText from './pages/PageText';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>


        {/* <NavbarDefault />
        <Inputform />
        <Gallery /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Layout />}>
            <Route path="dash" element={<Dashboard />} />
            <Route path='frequentevents' element={<FrequentEvents />} />
            <Route path='events' element={<Events />} />
            <Route path='text' element={<PageText />} />
          </Route>


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
