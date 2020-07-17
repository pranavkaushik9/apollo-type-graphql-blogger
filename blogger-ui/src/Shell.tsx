import React from 'react';
import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import { AppHeader, PostDetail } from './components';
import { Home } from './pages';

export const Shell = () => {
    return (
        <Router>
            <AppHeader />
            <Container >
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/post/:id" component={PostDetail} />
                    </Switch>
            </Container>
        </Router>
    )
};
