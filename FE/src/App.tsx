import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from './components/Layouts/LayoutAdmin'
import LayoutWebsite from './components/Layouts/LayoutWebsite'
import { Toaster } from './components/ui/toaster'

import ProductMg from './pages/admin/products/list'
import Signin from './pages/website/(auth)/Signin'
import CategoryDetail from './pages/website/_components/categoryDetail'
import AboutUs from './pages/website/about'
import Cartpage from './pages/website/cart'
import HomePage from './pages/website/home'
import ProductDetail from './pages/website/productDetail'
import ShopPage from './pages/website/shop'
import FormProduct from './pages/admin/products/_components/Form'
import OrderPage from './pages/website/order'
import ProductEdit from './pages/admin/products/edit'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='cart' element={<Cartpage />} />
          <Route path='categories/:id' element={<CategoryDetail />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='signin' element={<Signin />} />
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route path='products' element={<ProductMg />} />
          <Route path='products/add' element={<FormProduct />} />
          <Route path='products/:id/edit' element={<FormProduct />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
