import React from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButtons/BaseButton';
import { BaseLayoutConfig } from '../globalUIconfig';
import helper from '../../helper';

const { pixelToRem, setColor } = helper;

const FullSizeButtonBlock = styled(BaseButton)`
    width: 100%;
    display: block;
    font-size: ${pixelToRem(16)};
    height: ${pixelToRem(36)};
    line-height: ${pixelToRem(36)};
    border-radius: 20px;
    color: white;
    background-color: ${(props) =>
        props.backgroundColor
            ? props.backgroundColor
            : BaseLayoutConfig.primaryColor};
    &:hover {
        background-color: ${(props) =>
            props.backgroundColor
                ? setColor(props.backgroundColor, 10)
                : setColor(BaseLayoutConfig.primaryColor, 10)};
    }
    &:active {
        background-color: ${(props) =>
            props.backgroundColor
                ? setColor(props.backgroundColor, -10)
                : setColor(BaseLayoutConfig.primaryColor, -10)};
    }
`;

const FullSizeButton = ({ children, ...rest }) => {
    return <FullSizeButtonBlock {...rest}>{children}</FullSizeButtonBlock>;
};

export default FullSizeButton;
