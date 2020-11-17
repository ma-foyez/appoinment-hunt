import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Booklist from './Components/Dashboard/Booklist/Booklist';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRent from './Components/Dashboard/MyRent/MyRent'
import HouseDetails from './Components/HouseDetails/HouseDetails';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    password: "",
    email: "",
  })

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route login
            path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/house/:houseID">
            <HouseDetails />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/booklist">
            <Booklist />
          </PrivateRoute>
          <PrivateRoute path="/admin/addhouse">
            <AddHouse />
          </PrivateRoute>
          <PrivateRoute path="/admin/myRent">
            <MyRent />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
