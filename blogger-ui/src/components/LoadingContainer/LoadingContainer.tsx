import React, { ReactElement } from 'react';
import { CircularProgress } from '@material-ui/core';

interface LoadingContainerProps {
    loading: boolean;
    children: ReactElement
}
export const LoadingContainer = ({ loading, children }: LoadingContainerProps) => {
    if (loading) {
        return <CircularProgress />
    }

    return children;
};
