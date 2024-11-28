import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Checkout from "./Pages/Checkout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import NotFoundpage from "./Pages/NotFoundpage"
import Product from "./Pages/Product"
import Profile from "./Pages/Profile"
import Register from "./Pages/Register"
import Shop from "./Pages/Shop"
import { Route, Routes,} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function App() {
 
  return (
  <>
   <Toaster />
   <Navbar/>
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFoundpage/>} />
     
      </Routes>
      <Footer/>
  </>
  )
}

export default App
