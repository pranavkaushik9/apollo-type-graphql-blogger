import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';

import { Posts, Authors } from '../../components';

export const Home = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid spacing={3} container>
                <Grid item xs={12} md={9}>
                    <Posts args={{ first: 10 }} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Authors args={{first: 10}} title="Top Authors" className={classes.authorContainer}/>
                </Grid>
            </Grid>
        </Container>
    )
};

const useStyles = makeStyles({
    container: {
        marginTop: '1rem',
    },
    authorContainer: {
        padding: '1rem',
    }
});