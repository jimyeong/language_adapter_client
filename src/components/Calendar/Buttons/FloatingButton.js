import React from 'react';
import styled from 'styled-components';

const FloatingButtonBlock = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #9579c9;
    color: white;
    z-index: 5000;
    font-size: 18px;
    text-align: center;
    &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }
`;
const FloatingButton = ({ children, ...rest }) => {
    return <FloatingButtonBlock {...rest}>Icon</FloatingButtonBlock>;
};

export default FloatingButton;
