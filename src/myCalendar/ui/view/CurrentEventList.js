import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';

const { pixelToRem } = helper;
const CurrentEventListBlock = styled.ul`
    // padding: ${pixelToRem(14)} ${pixelToRem(34)};
    padding: 0;
`;

const CurrentEventList = ({ list, children, ...rest }) => {
    return <CurrentEventListBlock>{children}</CurrentEventListBlock>;
};

export default CurrentEventList;
