import React from 'react';
import { Container } from '@material-ui/core';

import { AppHeader } from './components';
import { Home } from './pages';

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
