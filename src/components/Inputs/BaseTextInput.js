import React from 'react';
import styled from 'styled-components';

const BaseTextInputBlock = styled.input`
    width: 100%;
    background: white;
    border: none;
    &:active {
        outline: none;
    }
`;

const BaseTextInput = ({
    value = '',
    onChange,
    onKeyPress,
    placeholder = '',
    name,
    children,
    ...rest
}) => {
    return (
        <React.Fragment>
            <BaseTextInputBlock
                {...rest}
                type="text"
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={value}
                placeholder={placeholder}
                name={name}
            />
        </React.Fragment>
    );
};

export default BaseTextInput;
