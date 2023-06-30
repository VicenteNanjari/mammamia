import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuNav from './components/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import {PizzasProvider} from './components/PizzaContext'
import Carrito from './views/Carrito'
import Detalles from './views/Detalles'


function App() {
  return (
    <PizzasProvider>
      <BrowserRouter>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/pizza/:id" element={<Detalles/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </PizzasProvider>
  )
}

export default App
