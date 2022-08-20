import React from 'react';
import styled from 'styled-components';
import SquareRoundedButton from './SquareRoundedButton';
import BaseRoundedImageButton from './BaseButtons/BaseRoundedImageButton';
import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
import cn from 'classnames';
const { pixelToRem } = helper;

const ImageSquareRoundedButtonBlock = styled(BaseRoundedImageButton)`
    width: 100%;
    height: ${pixelToRem(94)};
    background: white;
    &:active {
        background-color: #f7f6f7;
    }

    .image__wrapper {
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%, -50%);
    }
    .name {
        color: ${(props) => (props.color ? props.color : '#727272')};
        font-size: ${pixelToRem(12)};
        font-weight: 500;
        bottom: ${pixelToRem(10)};
    }
`;
const ImageSquareRoundedButton = ({
    color,
    image,
    name,
    children,
    onClick,
    ...rest
}) => {
    return (
        <ImageSquareRoundedButtonBlock
            {...rest}
            onClick={onClick}
            color={color}
            image={image}
            name={name}
        />
    );
};

export default ImageSquareRoundedButton;
