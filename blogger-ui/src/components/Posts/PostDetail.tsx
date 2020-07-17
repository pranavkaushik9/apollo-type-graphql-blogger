import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { getPost } from '../../graphql';
import { PostDetailResponse } from '../../types';
import { ErrorContainer } from '../ErrorContainer';
import { LoadingContainer } from '../LoadingContainer';
import { PostCard } from '../PostCard';


export const PostDetail = () => {
    const { id } = useParams();
    const {
        loading,
        error,
        data,
    } = useQuery<PostDetailResponse>(getPost, { variables: { id }});

    return (
        <LoadingContainer loading={loading}>
            <ErrorContainer error={error != null}>
                {
                    (data != null && data?.post != null)
                        ? <PostCard post={data.post} key={`allposts-${data.post.id}`} type="detail" />
                        : <></>
                }
            </ErrorContainer>
        </LoadingContainer>
    )
};
