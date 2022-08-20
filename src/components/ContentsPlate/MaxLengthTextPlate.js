import { ContentTextAreaPlate } from '.';

import React from 'react';
import styled from 'styled-components';
import helper from '../../helper';
const { pixelToRem } = helper;
const MaxLengthTextPlateBlock = styled.div`
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

const MaxLengthTextPlate = React.forwardRef(
    ({ targetName, value, onChange, maxLength, children, ...rest }, ref) => {
        return (
            <MaxLengthTextPlateBlock {...rest}>
                <textarea
                    name={targetName}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    className="textarea"
                    placeholder="최대 100자 입력가능"
                    cols="30"
                    rows="10"
                ></textarea>
            </MaxLengthTextPlateBlock>
        );
    }
);
export default MaxLengthTextPlate;
