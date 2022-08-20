import CustomDatePicker from './CustomDatePicker';

import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import cn from 'classnames';
import { BaseLayoutConfig } from '../../globalUIconfig';
import TextBoxUIComponent from './UiComponents/TextBoxUIComponent';

const {
    dateKoreanFormatter,
    dateBasicFormatter,
    pixelToRem,
    dateKoreanFormatterInDay,
} = helper;
const { _basicWhite } = BaseLayoutConfig.components;
/*
props: onChange
creator: jimmy
date: 2022.1.19
description: onChange:()=> "yyyy-MM-dd" 함수를 넘기셔서 사용하시면 됩니다.
*/

const TextBoxDatePickerBlock = styled.div`
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
const TextBoxDatePicker = ({
    type = 1,
    selectedDay,
    onChange,
    children,
    isDisable,
    ...rest
}) => {
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
        <TextBoxDatePickerBlock {...rest}>
            <div className="tb-col date__label">{printLabelType()}</div>
            <CustomDatePicker
                className={cn(['datepicker__wrapper', 'tb-col'])}
                selectedDay={selectedDay}
                customElement={<TextBoxUIComponent selectedDay={selectedDay} />}
                onHandleChange={onChange}
                isDisable={isDisable}
            />
        </TextBoxDatePickerBlock>
    );
};

export default TextBoxDatePicker;
