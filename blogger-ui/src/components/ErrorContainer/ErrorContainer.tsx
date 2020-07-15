import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

interface ErrorContainerProps {
    error: boolean;
    children: ReactElement;
    errorMessage?: string;
}
export const ErrorContainer = ({error, children, errorMessage}: ErrorContainerProps) => {
    if (error) {
        return (
            <Typography component="h5" variant="h5">
                { errorMessage || 'Something went wrong.'}
            </Typography>
        )
    }

    return children;
};
