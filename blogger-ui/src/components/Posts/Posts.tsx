import React from 'react';
import { makeStyles } from '@material-ui/core';
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from 'react-router-dom';

import { bookmarkedPostsStore, getPosts } from '../../graphql';
import { usePagination } from '../../hooks/usePagination';
import { Post, PostArgs } from '../../types';
import { Bookmarkable } from '../Bookmarkable';
import { ErrorContainer } from '../ErrorContainer';
import { LoadingContainer } from '../LoadingContainer';
import { PostCard } from '../PostCard';

interface PostsProps {
    args: PostArgs;
}

export const Posts = ({ args }: PostsProps) => {
    const {
        loading,
        error,
        items,
        fetchMoreData,
        hasMore
    } = usePagination<Post, PostArgs>(args, 'posts', getPosts);
    const { push: navigate } = useHistory();

    const classes = useStyles();
    const routeToPostDetail = (postId: string) => {
        navigate(`/post/${postId}`);
    }

    const handleBookmarkChange = (postId: string, isBookmarked: boolean) => {
        if (isBookmarked) {
            bookmarkedPostsStore.addNewBookmark(postId);
        } else {
            bookmarkedPostsStore.removeBookmark(postId);
        }
    };

    return (
        <LoadingContainer loading={loading}>
            <ErrorContainer error={error != null}>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore || false}
                    loader={<h4>Loading...</h4>}
                >
                {items && items.map(({ node: post }: { node: Post }) => (
                    <Bookmarkable
                        key={`allposts-${post.id}`}
                        onBookmarkChange={(isBookmarked: boolean) => {
                            handleBookmarkChange(post.id, isBookmarked);
                        }}
                        isBookmarked={post.isBookmarked}
                    >
                        <PostCard
                            post={post}
                            type="summary"
                            className={classes.postCard}
                            onPostClicked={routeToPostDetail}
                        />
                    </Bookmarkable>
                ))}
                </InfiniteScroll>
            </ErrorContainer>
        </LoadingContainer>
    )
};

const useStyles = makeStyles({
    postCard: {
        marginBottom: '1rem',
    }
});
