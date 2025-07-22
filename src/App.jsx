import { BrowserRouter as BrowerRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import { store } from './App/Store'
import { Provider } from 'react-redux';
import About from './pages/About';
import Login from './pages/Login';


function App() {
  return(
    <Provider store={store}>
    <BrowerRouter  >
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CartPage/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowerRouter>
    </Provider>
  )
}

export default App
