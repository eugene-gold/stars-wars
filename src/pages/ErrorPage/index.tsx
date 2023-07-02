import React from 'react';
import {useRouteError, isRouteErrorResponse} from "react-router-dom";
import {ErrorPageWrapper} from "./styles";

export const ErrorPage = () => {
    const error = useRouteError()
    let errorMessage: string

    if (isRouteErrorResponse(error)) {
        errorMessage =  error.error?.message || error.statusText
    } else if (error instanceof Error) {
        errorMessage = error.message
    } else if (typeof error === 'string') {
        errorMessage = error
    } else {
        console.error(error)
        errorMessage = 'Unknown error'
    }


  return (
    <ErrorPageWrapper>
      <h1>Oops!</h1>
        <h2>An error has occurred</h2>
        <i>{errorMessage}</i>
    </ErrorPageWrapper>
  );
};
