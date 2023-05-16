import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Payments from './pages/payments/Payments'
import Community from './pages/community/Community'
import Signup from './pages/signup/Signup'
import Criteria from './pages/criteria/Criteria'



const App = () => {
  return (
    
    <BrowserRouter>
       
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path ='discord' element = {<Community/>}/>
          <Route path ='payments' element = {<Payments/>}/>
          <Route path ='signup' element = {<Signup/>}/>
          <Route path ='criteria' element = {<Criteria/>}/>
        </Routes>
       
        
    </BrowserRouter>
  )
}

export default App