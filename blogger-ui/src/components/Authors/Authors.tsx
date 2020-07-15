import React from 'react';
import { useQuery } from '@apollo/client';
import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';

import { getUsers } from '../../graphql/queries/getUsers';
import { User, UserArgs, UserResponse } from '../../types';
import { LoadingContainer } from '../LoadingContainer';
import { ErrorContainer } from '../ErrorContainer';

interface AuthorsProps {
    args: UserArgs;
    title?: string;
    className: string;
}

export const Authors = ({ args, title, className }: AuthorsProps) => {
    const {
        loading,
        error,
        data: { users: { edges: authors} } = { users: { edges: null}}
    } = useQuery<UserResponse, UserArgs>(getUsers, { variables: args });
    const classes = useStyles();

    return (
        <LoadingContainer loading={loading}>
            <ErrorContainer error={error != null}>
                <section className={`${className} ${classes.container}`}>
                    {
                        title != null && (
                            <Typography
                                component="h5"
                                variant="h5"
                                color="inherit"
                                align="left"
                                noWrap
                            >
                                {title}
                            </Typography>
                        )
                    }
                    <List component="nav">
                        {
                            authors && authors!.map(({ node: user }: { node: User }) => (
                                <ListItem button key={`authors-${user.id}`}>
                                    <ListItemText primary={`${user.firstName} ${user.lastName}`} />
                                </ListItem>
                            ))
                        }
                        
                    </List>
                </section>
            </ErrorContainer>
        </LoadingContainer>
    )
};

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.background.paper,
    }
}));
