import React from 'react';
import styled from 'styled-components';
import ManagementTypingTitle from './ManagementTypingTitle';
import helper from '../../helper';
const { pixelToRem } = helper;
const ManagementTypingTitleWithValidationBlock = styled.div`
    width: 100%;
    .validate__message {
        font-size: ${pixelToRem(12)};
        color: red;
    }
`;

const ManagementTypingTitleWithValidation = ({
    name,
    onChange,
    value,
    placeholder,
    children,
    validateMessage,
    validateMessageShow,
    ...rest
}) => {
    return (
        <ManagementTypingTitleWithValidationBlock {...rest}>
            <ManagementTypingTitle
                name={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            {validateMessageShow && (
                <span className="validate__message">{validateMessage}</span>
            )}
        </ManagementTypingTitleWithValidationBlock>
    );
};

export default ManagementTypingTitleWithValidation;
