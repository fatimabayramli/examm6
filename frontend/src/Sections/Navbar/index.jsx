import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbarr'>
    <div className='navbar'>
      <h1>Tasty</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li >
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/wishlist">Favorites</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/wishlist">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar