import {BrowserRouter , Route, Routes} from 'react-router-dom'
import ListaRegistro from './components/ListaRegistro'
import FormRegistro from './components/FormRegistro'
import Header from './components/Header'

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path = '/' element = {<ListaRegistro/>} />
        <Route path = '/registro' element = {<FormRegistro/>} />
      </Routes>
    </div>  
    </BrowserRouter>
  )
}

export default App
