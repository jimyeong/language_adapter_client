import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    & + & {
        margin-top: 8px;
    }
    ${(props) => {
        return props.type == 'basic' && basicStyle();
    }}
    ${(props) => {
        return !props.type && basicStyle();
    }}
`;
const basicStyle = () => {
    return `
        padding: 0 4px;
        height: 36px;
        border: none;
        border-radius: 6px;
        color: #666;
        font-size: 18px;
        width: 100%;
        background:#f1f1f1;
        &:focus {
            outline: none;
            border: none;
        }
    `;
};

export default TextInput;
