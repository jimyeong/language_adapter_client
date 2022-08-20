import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';

const { pixelToRem } = helper;
const RoundChipBlock = styled.div`
    & + & {
        margin-left: 8px;
    }
    border-radius: 18px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    background-color: #f3f3f3;
    text-align: center;
    padding: 0 16px;
    display: inline-block;
    border: ${(props) =>
        props.borderColor ? `3px solid ${props.borderColor}` : 'none'};
`;
const RoundChip = ({ borderColor, text, ...rest }) => {
    return <RoundChipBlock borderColor={borderColor}>{text}</RoundChipBlock>;
};

export default RoundChip;
