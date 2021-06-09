import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { CheckoutView } from '../views/CheckoutView';
import { HomeView } from '../views/HomeView';
import { InformationView } from '../views/InformationView';
import { NotFoundView } from '../views/NotFoundView';

export const AppRouter = () => {
    return (   
        <Router>
            <Switch>
                <Route exact path="/" component={ HomeView } />
                <Route exact path="/checkout" component={ CheckoutView } />
                <Route exact path="/checkout/information" component={ InformationView } />
                <Route component={ NotFoundView } />
            </Switch>
        </Router>
    )
}
