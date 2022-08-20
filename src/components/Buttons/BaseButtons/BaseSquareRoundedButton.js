import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import BaseButton from './BaseButton';

const { setColor, pixelToRem } = helper;
const BaseSquareRoundedButtonBlock = styled(BaseButton)`
    border-radius: 12px;
    font-weight: 400;
    font-size: ${pixelToRem(12)};
`;

const BaseSquareRoundedButton = ({ children, ...rest }) => {
    return (
        <BaseSquareRoundedButtonBlock {...rest}>
            {children}
        </BaseSquareRoundedButtonBlock>
    );
};

export default BaseSquareRoundedButton;
