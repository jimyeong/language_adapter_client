import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';

const labeling_col = () => {};
const labeling_row = () => {
    return `
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
const LabelingBoxBlock = styled.div`
    ${(props) => props.uiType == 'row' && labeling_row()}
    ${(props) => props.uiType !== 'row' && labeling_col()}
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
