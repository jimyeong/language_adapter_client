import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
const { pixelToRem } = helper;
const ManagementTypingTitleBlock = styled.div`
    width: 90%;
    .title__input {
        width: 100%;
        font-weight: 600;
        font-size: ${pixelToRem(16)};
        height: ${pixelToRem(30)};
        padding-left: ${pixelToRem(0)};
        padding-right: ${pixelToRem(6)};
    }
`;

const ManagementTypingTitle = ({
    name,
    onChange,
    value,
    children,
    placeholder,
    ...rest
}) => {
    return (
        <ManagementTypingTitleBlock>
            <input
                className="title__input"
                type="text"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                maxLength={30}
            />
        </ManagementTypingTitleBlock>
    );
};

export default ManagementTypingTitle;
