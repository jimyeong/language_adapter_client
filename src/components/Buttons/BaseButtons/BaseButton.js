import React from 'react';
import styled from 'styled-components';

const BaseButtonBlock = styled.button`
    display: inline-block;
    text-align: center;
    background-color: transparent;
    border: none;
    padding: 0;
    &:focus {
        outline: none;
    }
`;

const BaseButton = ({ children, ...rest }) => {
    return <BaseButtonBlock {...rest}>{children}</BaseButtonBlock>;
};

export default BaseButton;
