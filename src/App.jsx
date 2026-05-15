import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const products = [
    { id: 1, name: 'Apple', category: 'Fruits', price: 1 },
    { id: 2, name: 'Banana', category: 'Fruits', price: 1.2 },
    { id: 3, name: 'Milk', category: 'Dairy', price: 2.5 },
    { id: 4, name: 'Cheese', category: 'Dairy', price: 3 }
  ]

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={products}
        category={category}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App