import React from 'react';
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
const IconCircleButton = ({ icon, size, backgroundColor, children }) => {
    return (
        <CircleButton size={size} backgroundColor={backgroundColor}>
            {children}
        </CircleButton>
    );
};
Buttons.CircleButton = CircleButton;
Buttons.IconCircleButton = IconCircleButton;

export default Buttons;
