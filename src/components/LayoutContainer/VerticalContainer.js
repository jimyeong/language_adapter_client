import React from 'react';
import styled from 'styled-components';

/*
props: axisY? , 
creator: jimmy
date: 2022.1.6
description: column 형태, 수직정렬을 해주는 레이아웃, 현재는 케이스가 많지 않아서, center 정렬로 해두게 하고, 추후에 보완및 개발
*/

const VerticalContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.axisX};
    justify-content: ${(props) => props.axisY};
    height: 100%;
`;

const VerticalContainer = ({
    axisX = 'center',
    axisY = 'justified',
    children,
    ...rest
}) => {
    const setAxisY = (axisY) => {
        if (axisY === 'justified') {
            return 'space-between';
        }
        if (axisY === 'center') {
            return 'center';
        }
        return 'space-between';
    };
    const setAxisX = (axisX) => {
        if (axisX === 'center') {
            return 'center;';
        }
        if (axisX === 'start') {
            return 'flex-start';
        }
        if (axisX === 'end') {
            return 'flex-end';
        }
        return 'center';
    };
    return (
        <VerticalContainerBlock
            axisX={setAxisX(axisX)}
            axisY={setAxisY(axisY)}
            {...rest}
        >
            {children}
        </VerticalContainerBlock>
    );
};

export default VerticalContainer;
