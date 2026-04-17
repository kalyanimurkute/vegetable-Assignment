import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home';
import Vegetables from './views/Vegetables';
import CallUs from './views/CallUs';
import MyCart from './views/MyCart';
import { BrowserRouter , Routes, Route} from "react-router";

const root = createRoot(document.getElementById('root'));
 root.render(<BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Vegetables' element={<Vegetables/>}/>
  <Route path='/CallUs' element={<CallUs/>} />
  <Route path='/MyCart' element={<MyCart/>} />


 </Routes>
 </BrowserRouter>
 );
