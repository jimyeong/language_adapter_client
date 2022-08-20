import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';

const { pixelToRem, truncate } = helper;
const ContentTextAreaPlateBlock = styled.div`
    .textarea {
        width: 100%;
        resize: none;
        background: transparent;
        border: none;
        box-sizing: border-box;
        font-size: ${pixelToRem(14)};
        color: #717171;
        .textarea::placeholder {
            color: #c7c7c7 !important;
            font-size: ${pixelToRem(14)};
        }
        &:focus {
            outline: none;
        }
    }
`;

const ContentTextAreaPlate = ({
    targetName,
    value = '',
    onChange,
    children,
    maxLength,
    ref,
    ...rest
}) => {
    const checkCharLength = (limitedLength) => {
        const limitedVal = value.substring(0, limitedLength);
        return limitedVal;
    };
    return (
        <ContentTextAreaPlateBlock {...rest}>
            <textarea
                className="textarea"
                value={checkCharLength()}
                name={targetName}
                cols="30"
                rows="10"
                placeholder="최대 100자 입력가능"
                onChange={onChange}
                maxLength={maxLength ? maxLength : undefined}
            ></textarea>
        </ContentTextAreaPlateBlock>
    );
};

export default ContentTextAreaPlate;
