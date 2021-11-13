import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authprovider from "./Page/Context/Authprovider";
import Dashbord from "./Page/Dashbord/Dashbord/Dashbord";
import Detailpage from "./Page/Deatilailpage/Detailpage";
import Drons from "./Page/Drons/Drons";
import Home from "./Page/Home/Home/Home";
import Login from "./Page/Login/Login";
import Pagenotfound from "./Page/Pagenotfound/Pagenotfound";
import Privateroute from "./Page/Privaterouter/Privateroute";
import Register from "./Page/Register/Register";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/drons">
              <Drons />
            </Route>
            <Privateroute path="/detailpage/:id">
              <Detailpage />
            </Privateroute>
            <Route path="/dashbord">
              <Dashbord />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="*">
              <Pagenotfound />
            </Route>
          </Switch>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
