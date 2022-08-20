import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const PrivateRouteBlock = styled.div``;

function PrivateRoute({ children, path }) {
    return (
        <React.Fragment>
            <Route exact element={children} path={path} />
        </React.Fragment>
    );
}

export default PrivateRoute;
