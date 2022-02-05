import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Home from '../../pages/home/home';
import Footer from "../../components/footer/footer.jsx"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Store from "../../pages/store/store"
import Product from "../../pages/product/product"
import React from 'react'
import "./customer.css"

export default function customer() {
      return (
            
      <Router>
      <div className="content">
        <div id= "sidebar"><Sidebar/></div> 
        
        <div className="main">  
        <nav><Navbar/></nav>
            <Switch>
              <Route exact path="/">
                <div className="home"> <Home/></div>
              </Route>
            </Switch>
            
            <Switch>
              <Route path="/store">
                <div className="store"><Store/></div>
              </Route>
            </Switch>

            <Switch>
              <Route path="/product">
                <div className="product"><Product/></div>
              </Route>
            </Switch>

        <Footer/>
        </div> 
      </div>  
      </Router>
      );
}


