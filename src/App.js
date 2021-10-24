import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound'
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Addservice from './Pages/AddService/Addservice';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
     <Authprovider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
            </PrivateRoute>
            <Route path="/addservice">
              <Addservice></Addservice>
            </Route>
            <Route path="/manageservice">
             <ManageServices></ManageServices>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </Authprovider>
    </div>
  );
}

export default App;
