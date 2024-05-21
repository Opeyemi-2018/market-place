
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductInfo from './components/ProductInfo'
import { useState } from 'react'
import Cart from './components/Cart'
// import Pratice from './pratice'
import AllProduct from './components/AllProduct'
import SignUp from './components/SignUp'

function App() {
  let [carts, setCart] = useState([])
  let [cartCount, setCartCount] = useState(1)
  let [itemQuantity, setItemQuantity] = useState(1)
  let [showSuccessMsg, setShowSuccessMsg] = useState(false)
  let [nav, setNav] = useState(false)


  return (
    <div className='relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar nav={nav} setNav={setNav} carts={carts} setCart={setCart} cartCount={cartCount} setCartCount={setCartCount} />} >
            <Route index element={<Home />} />
            <Route path='AllProduct' element={<AllProduct nav={nav} setNav={setNav} />} />
            <Route path='AllProduct/:id' element={<ProductInfo itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} carts={carts} setCart={setCart} cartCount={cartCount} setCartCount={setCartCount} setShowSuccessMsg={setShowSuccessMsg} />} />
            <Route path='cart' element={<Cart itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} cartCount={cartCount} setCartCount={setCartCount} carts={carts} setCart={setCart} />} />
            <Route path='signup' element={< SignUp />} />
            {/* <Route path='headphone' element={<HeadPhone  />} /> */}
            {/* <Route path='Speaker' element={<Speaker showSignUp={showSignUp} />} /> */}
            {/* <Route path='Speaker/:id' element={<Speakerinfo setSpeakerQuantity={setSpeakerQuantity} speakerQuantity={speakerQuantity} carts={carts} setCart={setCart} showSignUp={showSignUp} showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
