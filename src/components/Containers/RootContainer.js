import React from 'react';
import styled from 'styled-components';
import { BaseLayoutConfig } from '../globalUIconfig';
import helper from '../../helper';

const { pixelToRem } = helper;
const RootContainerBlock = styled.div`
    @media only screen and (max-width: ${BaseLayoutConfig.breakPoint}) {
        padding: 0 ${pixelToRem(BaseLayoutConfig.mobileSidePadding)};
    } ;
`;

const RootContainer = ({ children, ...rest }) => {
    return <RootContainerBlock {...rest}>{children}</RootContainerBlock>;
};

export default RootContainer;
