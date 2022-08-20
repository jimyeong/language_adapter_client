import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
import { BaseLayoutConfig } from '../globalUIconfig';
const { headerHeight } = BaseLayoutConfig;

/*
props: children
creator: jimmy
date: 2022.1.28
description: 상단 헤더 영역만큼 공간을 만들어주는 헤더, 
*/
const { pixelToRem } = helper;
const IntializeLayoutContainerBlock = styled.div`
    padding-top: ${pixelToRem(headerHeight[0])};
`;

const IntializeLayoutContainer = ({ children, ...rest }) => {
    return (
        <IntializeLayoutContainerBlock>
            {children}
        </IntializeLayoutContainerBlock>
    );
};

export default IntializeLayoutContainer;
