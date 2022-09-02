import React from 'react';
import styled from 'styled-components';

const initializeButtonAlign = () => {
    return `
        & + &{
            margin-right:8px;
        }
    `;
};
const AlignBoxBlock = styled.div`
    & + & {
        margin-top: 8px;
    }
`;
const GoRight = styled.div`
    ${(props) => props.alignType == 'buttons' && initializeButtonAlign()}
    float: right;
`;

const GoLeft = styled.div`
    ${(props) => props.alignType == 'buttons' && initializeButtonAlign()}
    float: left;
`;
const AlignBox = {};

AlignBox.Right = ({ children, alignType }) => {
    return (
        <AlignBoxBlock className="clearfix">
            {React.Children.map(children, (child, index) => {
                return <GoRight alignType={alignType}>{child}</GoRight>;
            })}
        </AlignBoxBlock>
    );
};
AlignBox.LeftRight = ({ alignSide, alignType, children }) => {
    return (
        <AlignBoxBlock className="clearfix">
            {alignSide == 'right' &&
                React.Children.map(children, (child, index) => {
                    return <GoRight alignType={alignType}>{child}</GoRight>;
                })}
            {alignSide !== 'right' &&
                React.Children.map(children, (child, index) => {
                    return <GoLeft alignType={alignType}>{child}</GoLeft>;
                })}
        </AlignBoxBlock>
    );
};

export default AlignBox;
