import React from 'react';
import styled from 'styled-components';
import BaseSquareRoundedButton from './BaseSquareRoundedButton';
import helper from '../../../helper';
import { BaseLayoutConfig } from '../../globalUIconfig';
const { pixelToRem } = helper;

const _typePurple = '#ff5252';
const BaseRoundedIconButtonBlock = styled(BaseSquareRoundedButton)`
    height: ${pixelToRem(64)};
    width: 100%;
    box-shadow: 1px 1px 0px 2px rgb(0 0 0 / 5%);
    position: relative;
    .icon__wrapper {
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
const BaseRoundedIconButton = ({
    icon,
    name,
    logoColor = BaseLayoutConfig.primaryColor,
    children,
    ...rest
}) => {
    const Icon = icon;
    return (
        <BaseRoundedIconButtonBlock {...rest}>
            <div className="icon__wrapper">
                <Icon className="super_icon" stroke={logoColor} />
            </div>
            <div className="name">{name}</div>
        </BaseRoundedIconButtonBlock>
    );
};

export default BaseRoundedIconButton;
