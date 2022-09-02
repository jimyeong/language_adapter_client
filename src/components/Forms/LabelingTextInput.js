import TextInput from './TextInput';

import React from 'react';
import styled from 'styled-components';
import LabelingBox from './LabelingBox';

function LabelingTextInput({
    children,
    labelingName,
    name,
    text,
    placeholder,
    uiType,
    onChange,
    Button,
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
            {Button && Button}
        </LabelingBox>
    );
}

export default LabelingTextInput;
