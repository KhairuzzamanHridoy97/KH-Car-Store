import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Explores from './pages/Explores/Explores/Explores';
import Login from './pages/Login/Login/Login';



function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explores">
            <Explores></Explores>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>

  

     
    </div>
  );
}

export default App;
