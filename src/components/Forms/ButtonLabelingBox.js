import React from 'react';
import styled from 'styled-components';
import LabelingBox from './LabelingBox';
import LabelingTextInput from './LabelingTextInput';
import TextInput from './TextInput';

function ButtonLabelingBox({
    children,
    labelingName,
    name,
    value,
    placeholder,
    onChange,
}) {
    return (
        <LabelingBox labelingName={labelingName} uiType="buttonlabel">
            <TextInput
                className="text__input"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {children}
        </LabelingBox>
    );
}

export default ButtonLabelingBox;
