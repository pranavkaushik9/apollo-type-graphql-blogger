import React from 'react';
import { Container } from '@material-ui/core';

import { Home } from './pages';
import { AppHeader } from './components';

export const Shell = () => {
    return (
        <>
            <AppHeader />
            <Container >
                <Home />
            </Container>
        </>
    )
};
