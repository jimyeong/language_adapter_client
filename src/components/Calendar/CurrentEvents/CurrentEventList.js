import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';

const { pixelToRem } = helper;
const CurrentEventListBlock = styled.ul`
    background-color: #f3f3f3;
    padding: ${pixelToRem(14)} ${pixelToRem(34)};
`;

const CurrentEventList = ({ list, children, ...rest }) => {
    return <CurrentEventListBlock>{children}</CurrentEventListBlock>;
};

export default CurrentEventList;
