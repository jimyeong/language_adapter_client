import React from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButtons/BaseButton';
import { BaseLayoutConfig } from '../globalUIconfig';
import helper from '../../helper';

const { setColor } = helper;
const { primaryColor } = BaseLayoutConfig;

/*
props: backgroundColor, color , width, children
creator: 
date: 2022.1.12
description: backgroundColor, color, width, 
*/
const ButtonBlock = styled(BaseButton)`
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    display: inline-block;
    width: ${(props) => props.width};
    border-radius: 8px;
    &:hover {
        background: ${(props) => setColor(props.backgroundColor, 10)};
    }
    &:active {
        background: ${(props) => setColor(props.backgroundColor, -10)};
    }
`;

const Button = ({
    backgroundColor = primaryColor,
    color = 'white',
    width = '80px',
    children,
    ...rest
}) => {
    return (
        <ButtonBlock
            backgroundColor={backgroundColor}
            color={color}
            width={width}
            {...rest}
        >
            {children}
        </ButtonBlock>
    );
};

export default Button;
