import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';

import { Authors, Posts } from '../../components';

export const Home = () => {
    const classes = useStyles();
    return (
        <Container>
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
    authorContainer: {
        padding: '1rem',
    }
});