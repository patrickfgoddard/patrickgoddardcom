import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import {
  Home,
  InstaBioLinks,
  IhmLinks
} from "./pages";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Patrick Goddard</title>
        </Helmet>
        <Switch>
          <Route path="/insta-bio-links">
            <InstaBioLinks />
          </Route>
          <Route path="/i-hate-the-moon">
            <IhmLinks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
