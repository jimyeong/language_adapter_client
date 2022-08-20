import React from 'react';
import styled from 'styled-components';
import BaseLayoutConfig from '../globalUIconfig/BaseLayoutConfig';

const BaseFloatingButtonBlock = styled.button`
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    right: 32px;
    bottom: 32px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    background-color: ${(props) =>
        props.backgroundColor
            ? props.backgroundColor
            : BaseLayoutConfig.primaryColor};
    .vm_siblings {
        display: inline-block;
        vertical-align: middle;
    }
    &:after {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }
`;
const BaseFloatingButton = ({
    onClickCallback,
    backgroundColor,
    icon,
    children,
    ...rest
}) => {
    const onClick = (e) => {
        e.stopPropagation();
        onClickCallback && onClickCallback();
    };
    return (
        <BaseFloatingButtonBlock
            onClick={onClick}
            backgroundColor={backgroundColor}
        >
            <div className="vm_siblings">{icon}</div>
        </BaseFloatingButtonBlock>
    );
};

export default BaseFloatingButton;
