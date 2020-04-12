import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/HomePages';
import Discover from './components/discover/DiscoverPages';
function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Discover} />
            </div>
        </Router>
    );
}
export default routes;