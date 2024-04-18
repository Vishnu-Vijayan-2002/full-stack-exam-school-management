import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Registration from './components/Registration'
import Home from './components/Home'
import Alldetails from './components/Alldetails'
function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Alldetails/>}/>
        {/* <Route path='/register' element={<Auth insideRegister/>}/> */}
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>

    </>
  )
}

export default App
