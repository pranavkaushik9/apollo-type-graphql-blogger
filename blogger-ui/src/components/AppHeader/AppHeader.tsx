import React from 'react';
import { Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';

export const AppHeader = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Container>
                <Toolbar>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Blogger
                    </Typography>
                    <Button variant="outlined" size="small" color="secondary">
                        Sign up
                    </Button>
                </Toolbar>
            </Container>
        </header>
    );
};

const useStyles = makeStyles((theme) => ({
    header: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.primary.dark,
    },
    toolbarTitle: {
      flex: 1,
      textAlign: 'left',
      color: theme.palette.text.secondary
    },
}));
  