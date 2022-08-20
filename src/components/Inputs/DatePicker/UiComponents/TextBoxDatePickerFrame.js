import React from 'react';
import styled from 'styled-components';
import helper from '../../../../helper';
const { pixelToRem } = helper;

const TextBoxDatePickerFrameBlock = styled.div`
    display: table;
    width: 100%;
    font-weight: 500;
    color: #c3c3c3;
    background-color: transparent;
    padding: ${pixelToRem(3)} 0;
    &:active {
        background-color: #f1f1f1;
    }
    & + & {
        margin-top: ${pixelToRem(12)};
    }
    .date__label {
        width: 20%;
        text-align: left;
    }
    .datepicker__wrapper {
        width: 80%;
        text-align: right;
    }
    .tb-col {
        display: table-cell;
    }
`;
const TextBoxDatePickerFrame = ({ type, children, ...rest }) => {
    const printLabelType = () => {
        if (parseInt(type) === 1) {
            return '시작';
        }

        if (parseInt(type) === 2) {
            return '종료';
        }

        if (parseInt(type) === 3) {
            return '발표';
        }
    };
    return (
        <TextBoxDatePickerFrameBlock>
            <div className="tb-col date__label">{printLabelType()}</div>
            <div className="datepicker__wrapper">{children}</div>
        </TextBoxDatePickerFrameBlock>
    );
};

export default TextBoxDatePickerFrame;
