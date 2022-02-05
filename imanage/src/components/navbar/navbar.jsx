import React from 'react'
import "./navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function navabar() {
      return (
            <div className="navbar">
                  <div className="title">
                        <h1>iManage</h1>
                  </div>
                  
                  <div className="searchBox">
                        <input type="text" placeholder="Search me"></input>
                        <div className="searchIcon"><SearchIcon/></div>
                  </div>

                  <div className="cart">
                        <ShoppingCartIcon/>
                        <span className="cartCounter">2</span>
                  </div>
                        <span className="logIn">Login</span>
                        <span className="signUp">Sign Up</span>
                  <div>

                  </div>
            </div>
      )
}
