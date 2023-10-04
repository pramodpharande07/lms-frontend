// Library imports 
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
//component import 
import App from './App.jsx'
//css import
import './index.css'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
 </BrowserRouter>
)
