import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';

const { pixelToRem } = helper;

const ApplicationLinkBlock = styled.a`
    display: block;
    text-align: center;
    font-size: ${pixelToRem(16)};
    font-weight: 600;
    margin-bottom: ${pixelToRem(20)};
    text-decoration: underline;
    color: #9579c9;
`;

const ApplicationFakeButtonBlock = styled.div`
    display: block;
    text-align: center;
    font-size: ${pixelToRem(16)};
    font-weight: 600;
    margin-bottom: ${pixelToRem(20)};
    text-decoration: underline;
    color: #9579c9;
`;

const ApplicationLink = ({ onClick, content, children, ...rest }) => {
    return (
        <React.Fragment>
            <ApplicationFakeButtonBlock onClick={onClick}>
                {content}
            </ApplicationFakeButtonBlock>
        </React.Fragment>
    );
};

export default ApplicationLink;
