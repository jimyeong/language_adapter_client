import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';

/*
props: callback, backgroundColor
creator: jimmy
date: 2022.1.12
description:  클릭시 이벤트는 callback props 를 통해 전달하세요, backgroundColor로 색상을 지정할 수 있고, 기본값은 프로젝트 primaryColor(기본테마색)입니다.
*/

const { pixelToRem, setColor } = helper;
const { primaryColor } = BaseLayoutConfig;
const FloatingButtonBlock = styled.div`
    position: fixed;
    z-index: 4000;
    bottom: ${pixelToRem(50)};
    right: ${pixelToRem(50)};

    .floating__btn {
        border-radius: 50%;
        width: ${pixelToRem(50)};
        height: ${pixelToRem(50)};
        background-color: ${(props) => props.backgroundColor};
        box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
    }
    &:active {
        .floating__btn {
            background-color: ${(props) =>
                setColor(props.backgroundColor, -20)};
        }
    }
`;

const FloatingButton = ({
    backgroundColor = primaryColor,
    callback,
    children,
    ...rest
}) => {
    const onClick = (e) => {
        if (callback) {
            callback(e);
        }
    };
    return (
        <FloatingButtonBlock
            {...rest}
            onClick={onClick}
            backgroundColor={backgroundColor}
        >
            <Button className="floating__btn"></Button>
        </FloatingButtonBlock>
    );
};

export default FloatingButton;
