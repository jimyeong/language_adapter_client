import React from 'react';
import styled from 'styled-components';

/*
props: x
creator: jimmy 
date: 2022.1.28
description: 요소돌의 간격을 동일하게 하여서 좌우측으로 균일한 간격으로 배치하고 싶을 때 사용한다.
*/
const JustifyingContainerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const JustifyingContainer = ({ children, ...rest }) => {
    return (
        <JustifyingContainerBlock {...rest}>
            {children}
        </JustifyingContainerBlock>
    );
};

export default JustifyingContainer;
