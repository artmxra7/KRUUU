import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navmenu from './components/common/navmenu';
import Footer from './components/common/footer.js';
import HomePages from './components/home/HomePages';
import DiscoverPages from './components/discover/DiscoverPages';
import TalentPages from './components/talent/TalentPages';
import JobsPages from './components/jobs/JobsPages';
import ServicesPages from './components/services/ServicesPages';
import MarketplacePages from './components/marketplace/MarketplacePages';
import SignInPages from './components/signin/SignInPages';
import SignUpPages from './components/signup/SignUpPages';
import SignUpOptions from './components/signup/SignUpOptions';
import NotFound from './components/common/notfound';
import TestApi from './components/api/testapi';
import CrudApi from './components/api/crudapi';

import {PrivateRoute, GuestRoute} from "./components/Helpers/RestrictedRoutes";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  



  render() {
    return (
      <div>
        <Navmenu />
        <Route>
          <Switch>
            <GuestRoute exact path="/" component={HomePages} />
            <GuestRoute exact path="/talent" component={TalentPages} />
            <GuestRoute exact path="/discover" component={DiscoverPages} />
            <GuestRoute exact path="/jobs" component={JobsPages} />
            <GuestRoute exact path="/services" component={ServicesPages} />
            <GuestRoute exact path="/marketplace" component={MarketplacePages} />
            <GuestRoute exact path="/signin" component={SignInPages} />
            <GuestRoute exact path="/signup" component={SignUpPages} />
            <GuestRoute exact path="/signupoptions" component={SignUpOptions} />
            <GuestRoute exact path="/testapi" component={TestApi} />
            <GuestRoute exact path="/crud" component={CrudApi} />
            <GuestRoute component={NotFound} />
          </Switch>
          <Footer />

        </Route>
      </div>
    );
  }
}

export default App;