import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  HashRouter,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import {
  Home,
  InstaBioLinks,
  IhmLinks
} from "./pages";

function App() {
  let basename = '/';
  if (process.env.NODE_ENV === 'production') {
    basename = '/patrickgoddardcom';
  }
  return (
    <Router basename={basename}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Patrick Goddard</title>
        </Helmet>
        <HashRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/insta-bio-links">
            <InstaBioLinks />
          </Route>
          <Route path="/i-hate-the-moon">
            <IhmLinks />
          </Route>
        </HashRouter>
      </div>
    </Router> 
  );
}

export default App;
