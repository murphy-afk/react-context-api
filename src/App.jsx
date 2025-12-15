import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import DefaultLayout from './layouts/DefaultLayout'
import PageNotFound from './pages/PageNotFound'
import Favourites from './pages/Favourites'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { BudgetProvider } from './context/BudgetContext'
import { CollectionsProvider } from './context/CollectionsContext'

function App() {

  return (
    <>
      <BudgetProvider>
        <CollectionsProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/favourites' element={<Favourites />} />
                <Route path='/cart' element={<Cart />} />
              </Route>
              <Route path='/checkout' element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CollectionsProvider>
      </BudgetProvider>
    </>
  )
}

export default App
