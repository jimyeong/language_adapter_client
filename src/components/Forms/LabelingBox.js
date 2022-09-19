import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';

const labeling_col = () => {
    return `
        .textinput__label {
            display: inline-block;
            padding-bottom:4px;
        }
    `;
};
const labeling_row = () => {
    return `
    & + & {
        margin-top: 8px;
    }
    & {
        position: relative;
        padding-left: 80px;
    }
    .textinput__label {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #777;
    }`;
};
const labeling_button = () => {
    return `
        ${labeling_row()}
        & {
            position: relative;
            padding-left: 80px;
            padding-right: 40px;
        }
        > button{
            position: absolute;
            right: 0;
            top:50%;
            transform: translate(0, -50%);
        }
    
    `;
};
const LabelingBoxBlock = styled.div`
    ${(props) => props.uiType == 'row' && labeling_row()}
    ${(props) => props.uiType == 'col' && labeling_col()}
    ${(props) => props.uiType == 'buttonlabel' && labeling_button()}
`;

function LabelingBox({ children, labelingName, uiType }) {
    return (
        <LabelingBoxBlock uiType={uiType}>
            <span className="textinput__label">{labelingName}</span>
            {children}
        </LabelingBoxBlock>
    );
}

export default LabelingBox;
