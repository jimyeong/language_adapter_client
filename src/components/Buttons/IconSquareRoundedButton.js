import React from 'react';
import styled from 'styled-components';
import SquareRoundedButton from './SquareRoundedButton';
import BaseRoundedIconButton from './BaseButtons/BaseRoundedIconButton';

import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
import cn from 'classnames';
const { pixelToRem } = helper;

/*
props: icon, name, locoColor?
creator: jimmy
date: 2022.1.7
description: BaseRoundedIconButton 상속받아서, 아이콘, 이름이 있는 모서리가 둥근 버튼을 만든다.
*/

const IconSquareRoundedButtonBlock = styled(BaseRoundedIconButton)`
    width: 100%;
    height: ${pixelToRem(94)};
    background: white;
    &:active {
        background-color: #f7f6f7;
    }

    .icon__wrapper {
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%, -50%);
    }
    .name {
        color: #727272;
        font-size: ${pixelToRem(12)};
        font-weight: 500;
        bottom: ${pixelToRem(10)};
    }
`;

const IconSquareRoundedButton = ({
    icon,
    name,
    logoColor = BaseLayoutConfig.primaryColor,
    onClick,
    children,
    ...rest
}) => {
    const onIconSquareClick = (e) => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <IconSquareRoundedButtonBlock
            icon={icon}
            name={name}
            logoColor={logoColor}
            onClick={onIconSquareClick}
        />
    );
};

export default IconSquareRoundedButton;
