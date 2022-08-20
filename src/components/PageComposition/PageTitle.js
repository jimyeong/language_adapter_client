import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
const { pixelToRem } = helper;

const PageTitleBlock = styled.h3`
    font-size: ${pixelToRem(20)};
    font-weight: 600;
    color: #727272;
    // margin-top: ${pixelToRem(26)};
    // margin-bottom: ${pixelToRem(24)};
`;

const PageTitle = ({ title, children, ...rest }) => {
    return <PageTitleBlock {...rest}>{title}</PageTitleBlock>;
};

export default PageTitle;
