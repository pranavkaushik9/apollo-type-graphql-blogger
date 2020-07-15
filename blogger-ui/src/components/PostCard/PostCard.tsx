import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';

import { Post } from '../../types/Post';

interface PostCardPropType {
    post: Post;
    type?: 'summary' | 'detail';
    className?: string;
}

export const PostCard = ({ post, type = 'summary', className = '' }: PostCardPropType) => {
    const classes = useStyles();
    return (
        <CardActionArea component="a" href="#">
            <Card className={`${classes.card} ${className}`}>
                <div className={classes.cardDetails}>
                    <CardContent color="primary">
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {
                                type === 'summary'
                                    ? `${post.body.substring(0, 50)}...`
                                    : post.body
                            }
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Authored by {`${post.author?.firstName} ${post.author?.lastName}`}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </CardActionArea>
    )
};

const useStyles = makeStyles({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    }
});
