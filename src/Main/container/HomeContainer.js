import React from 'react';
import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';

const HomeContainerBlock = styled.div``;

function HomeContainer({ children }) {
    return (
        <HomeContainerBlock>
            <MainContainer />
            {/* <LoginContainer /> */}
        </HomeContainerBlock>
    );
}

export default HomeContainer;
