import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Footer from "./components/footer/footer.jsx"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Store from "./pages/store/store"
import Product from "./pages/product/product"

function App() {

  
  return (
      <Router>

      <div className="content">
        <nav><Navbar/></nav>
        
        <div className="main">  
        <div className= "mainSidebar"><Sidebar/></div> 

          <div className="mainDashboard">
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
        </div> 
        </div>
        <Footer/>
      </div>  
      </Router>
  );
}

export default App;
