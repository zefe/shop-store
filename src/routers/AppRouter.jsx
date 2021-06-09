import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Layout } from '../components/Layout/Layout';
import { CheckoutView } from '../views/CheckoutView';
import { HomeView } from '../views/HomeView';
import { NotFoundView } from '../views/NotFoundView';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

export const AppRouter = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={ useInitialState }>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={ HomeView } />
                        <Route exact path="/checkout" component={ CheckoutView } />
                        <Route component={ NotFoundView } />
                    </Switch>
                </Layout>
            </Router>
        </AppContext.Provider>
    )
}
