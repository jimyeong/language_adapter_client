import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
import BaseSquareRoundedButton from './BaseButtons/BaseSquareRoundedButton';

const { setColor, pixelToRem } = helper;
const SquareRoundedButtonBlock = styled(BaseSquareRoundedButton)`
    width: ${pixelToRem(60)};
    height: ${pixelToRem(40)};
    font-weight: 600;
    color: ${BaseLayoutConfig.primaryColor};
    background-color: #f3f3f3;
    &.btn:active {
        background-color: ${setColor('#f3f3f3', 30)};
    }
    &.btn:hover {
        background-color: ${setColor('#f3f3f3', -30)};
    }
`;

const SquareRoundedButton = ({ children, ...rest }) => {
    return (
        <SquareRoundedButtonBlock {...rest}>
            {children}
        </SquareRoundedButtonBlock>
    );
};

export default SquareRoundedButton;
