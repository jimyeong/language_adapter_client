import TextInput from './TextInput';

import React from 'react';
import styled from 'styled-components';
import LabelingBox from './LabelingBox';

const LabelingTextInputBlock = styled.div`
    ${(props) => props.uiType == 'row' && labeling_row()}
    ${(props) => props.uiType !== 'row' && labeling_col()}
`;

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

function LabelingTextInput({
    children,
    labelingName,
    name,
    text,
    placeholder,
    uiType,
    onChange,
}) {
    return (
        <LabelingBox uiType={uiType} labelingName={labelingName}>
            <TextInput
                className="text__input"
                name={name}
                text={text}
                placeholder={placeholder}
                onChange={onChange}
            />
        </LabelingBox>
    );
}

export default LabelingTextInput;
