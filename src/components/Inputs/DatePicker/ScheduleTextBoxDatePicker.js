import React from 'react';
import styled from 'styled-components';
import CustomDatePicker from './CustomDatePicker';
import helper from '../../../helper';
import cn from 'classnames';
import { BaseLayoutConfig } from '../../globalUIconfig';
import TextBoxUIComponent from './UiComponents/TextBoxUIComponent';
const { pixelToRem } = helper;

const ScheduleTextBoxDatePickerBlock = styled.div`
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
    .unspecified__label {
        text-align: right;
    }
`;
const ScheduleTextBoxDatePicker = ({
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

    const parseSelctedDate = (selectedDate) => {
        if (selectedDate == '') {
            return null;
        }
        return selectedDate;
    };

    return (
        <ScheduleTextBoxDatePickerBlock>
            <div className="tb-col date__label">{printLabelType()}</div>
            {!parseSelctedDate(selectedDay) && (
                <h3 className="unspecified__label">미정</h3>
            )}
            {parseSelctedDate(selectedDay) && (
                <CustomDatePicker
                    className={cn(['datepicker__wrapper', 'tb-col'])}
                    selectedDay={new Date(selectedDay)}
                    customElement={
                        <TextBoxUIComponent
                            selectedDay={new Date(selectedDay)}
                        />
                    }
                    onHandleChange={onChange}
                    isDisable={isDisable}
                />
            )}
        </ScheduleTextBoxDatePickerBlock>
    );
};

export default ScheduleTextBoxDatePicker;
