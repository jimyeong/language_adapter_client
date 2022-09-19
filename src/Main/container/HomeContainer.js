import React from 'react';
import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';
import AddWordContainer from './Details/AddWordContainer';
import AddExpressionContainer from './Details/AddExpressionContainer';

const HomeContainerBlock = styled.div``;

function HomeContainer({ children }) {
    return (
        <HomeContainerBlock>
            <AddWordContainer />
            <MainContainer />
        </HomeContainerBlock>
    );
}

export default HomeContainer;
