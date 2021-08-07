import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '@/containers/Home';
import About from '@/containers/About';
import Clock from '@/containers/Clock';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={About} path={'/about'} />
                <Route component={Clock} path={'/clock'} />
                <Route component={Home} path={'/'} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
