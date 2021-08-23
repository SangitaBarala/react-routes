import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Orders from "./components/Orders";
function App() {
  return (
    <div className="App">
        <Router >
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/orders'>ORDERS</Link></li>

            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/orders' component={Orders}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
