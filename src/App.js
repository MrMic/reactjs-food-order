import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
