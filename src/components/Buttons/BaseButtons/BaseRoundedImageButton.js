import React from 'react';
import styled from 'styled-components';
import BaseSquareRoundedButton from './BaseSquareRoundedButton';
import helper from '../../../helper';
const { pixelToRem } = helper;

const _typePurple = '#ff5252';
const BaseRoundedImageButtonBlock = styled(BaseSquareRoundedButton)`
    height: ${pixelToRem(64)};
    width: 100%;
    box-shadow: 1px 1px 0px 2px rgb(0 0 0 / 5%);
    position: relative;
    .image__wrapper {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
    }
    .name {
        color: ${_typePurple};
        position: absolute;
        left: 50%;
        width: 100%;
        bottom: ${pixelToRem(5)};
        transform: translateX(-50%);
        font-weight: 500;
        font-size: ${pixelToRem(12)};
        word-break: keep-all;
    }
`;
const BaseRoundedImageButton = ({ image, name, children, ...rest }) => {
    return (
        <BaseRoundedImageButtonBlock {...rest}>
            <div className="image__wrapper">{image}</div>
            <div className="name">{name}</div>
        </BaseRoundedImageButtonBlock>
    );
};

export default BaseRoundedImageButton;
