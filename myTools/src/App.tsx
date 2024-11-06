import {Route, Routes} from 'react-router-dom'
import { History } from './myTools/timer/pages/History'
import { DefaultLayout } from './myTools/timer/layouts/DefaultLayout'
import { Home } from './myTools/timer/pages/Home'
import { GluedHub } from './myTools/gluedHub/Glued-Hub'
import TodoHeader from './myTools/todoList/components/TodoHeader'
import { Slider } from './myTools/Slides/Slider'

function App() {
  
  return (
   <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Route>

      <Route path='/todoList' element={<TodoHeader/>}/>
      <Route path='/gluedhub' element={<GluedHub/>}/>
      <Route path='/slider' element={<Slider/>}/>


   </Routes>
  )
}

export default App
