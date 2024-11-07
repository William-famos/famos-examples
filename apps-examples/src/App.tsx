import { Inicial } from './pages/Vihos/Inicial.tsx'
import { Home } from './pages/Travelers/Home'
import {Route,Routes} from 'react-router-dom'
import { Ecomerce } from './pages/Ecommerce/Ecomerce.tsx'

function App() {


  return (
    <>
      <Routes>
        <Route path='/Vihos' element={<Inicial/>}/>
        <Route path='/Ecommerce' element={<Ecomerce/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
