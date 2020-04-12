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
import NotFound from './components/common/notfound';
import TestApi from './components/api/testapi';
import CrudApi from './components/api/crudapi';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  



  render() {
    return (
      <div>
        <Navmenu />
        <Route>
          <Switch>
            <Route exact path="/" component={HomePages} />
            <Route exact path="/talent" component={TalentPages} />
            <Route exact path="/discover" component={DiscoverPages} />
            <Route exact path="/jobs" component={JobsPages} />
            <Route exact path="/services" component={ServicesPages} />
            <Route exact path="/marketplace" component={MarketplacePages} />
            <Route exact path="/signin" component={SignInPages} />
            <Route exact path="/signup" component={SignUpPages} />
            <Route exact path="/testapi" component={TestApi} />
            <Route exact path="/crud" component={CrudApi} />
            <Route component={NotFound} />
          </Switch>
          <Footer />

        </Route>
      </div>
    );
  }
}

export default App;