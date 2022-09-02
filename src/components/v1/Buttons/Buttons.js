import React, { memo } from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import { BaseLayoutConfig } from '../../globalUIconfig';
const { setColor } = helper;

const normalizeButton = ({ backgroundColor }) => {
    return `
        background-color: ${backgroundColor};
        border:none;
        cursor:pointer;
        &:hover{
            background-color: ${setColor(backgroundColor, 20)};
        }
        &:active{
            background-color: ${setColor(backgroundColor, -20)};
        }
        &:focus{
        }
    `;
};
const Buttons = {};
const ButtonsBlock = styled.div``;
const CircleButton = styled.button`
    & + & {
        margin-left: 8px;
    }
    width: ${(props) => `${props.size ? props.size : 30}px`};
    height: ${(props) => `${props.size ? props.size : 30}px`};
    border-radius: 50%;
    ${(props) =>
        normalizeButton({
            backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : BaseLayoutConfig.primaryColor,
        })}
`;
const RoundedBoxButton = styled.button`
    height: 38px;
    padding: 4px 8px;
    border-radius: 8px;
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => `${props.fontSize}px`};
    ${(props) =>
        normalizeButton({
            backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : BaseLayoutConfig.primaryColor,
        })};
`;

const IconCircleButton = ({
    icon,
    size,
    backgroundColor,
    children,
    onClick,
    ...rest
}) => {
    return (
        <CircleButton
            size={size}
            backgroundColor={backgroundColor}
            onClick={onClick}
            {...rest}
        >
            {children}
        </CircleButton>
    );
};
Buttons.CircleButton = memo(CircleButton);
Buttons.IconCircleButton = memo(IconCircleButton);
Buttons.RoundedBoxButton = memo(RoundedBoxButton);
const utils = {
    normalizeButton,
};
Buttons.utils = utils;

export default Buttons;
