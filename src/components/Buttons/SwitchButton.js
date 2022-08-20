import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import helper from '../../helper';
import cn from 'classnames';
import { BaseLayoutConfig } from '../globalUIconfig';
const { pixelToRem, setColor } = helper;
const { primaryColor } = BaseLayoutConfig;

/*
props: callback
creator: jimmy
date: 2022.1.12
description: 왼쪽으로 가있는 게 켜져있는 상태입니다. callback 으로 원하시는 동작을 전달하시면 됩니다.
*/
const circleSize = 20;
const SwitchButtonBlock = styled.div`
    position: relative;
    width: ${pixelToRem(32)};
    height: ${pixelToRem(20)};
    border: 1px solid ${primaryColor};
    border-radius: 10px;
    .switch__circle {
        position: absolute;
        width: ${pixelToRem(20)};
        height: ${pixelToRem(20)};
        border-radius: 50%;
        background-color: ${primaryColor};
        left: 0px;
        top: -1px;
        transition: all 0.05s ease-in-out;
        &:hover {
            background-color: ${setColor(primaryColor, 10)};
        }
        &:active {
            background-color: ${setColor(primaryColor, -10)};
        }
    }
    &.is-active {
        background-color: ${primaryColor};
        .switch__circle {
            left: calc(100% - 19px);
            background-color: ${setColor('#f1f1f1', -10)};
            border: 1px solid ${primaryColor};
        }
    }
`;
const SwitchButton = ({ switchStatus, callback, children, ...rest }) => {
    const initalState = switchStatus === '1' ? true : false;
    const [status, setStatus] = useState(initalState);

    const onToggle = () => {
        setStatus(!status);
        if (callback) !status ? callback('1') : callback('0');
    };
    return (
        <SwitchButtonBlock
            className={cn(['switchButton'], status && 'is-active')}
            onClick={onToggle}
        >
            <span className="switch__circle"></span>
        </SwitchButtonBlock>
    );
};

export default SwitchButton;
