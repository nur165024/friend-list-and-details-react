import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Nopage from './Component/Nopage/Nopage';
import UserDetails from './Component/UserDetails/UserDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/user/details/:id">
          <UserDetails />
        </Route>
        <Route path='*'>
          <Nopage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

