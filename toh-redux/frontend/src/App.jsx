import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';
import store from './redux/stores';
import Login from './components/Login';

// TODO Move credentials to .env
function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store()}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/Heroes">Heroes</Link>
            <Link to="/404">404</Link>
          </nav>
          <Login />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
