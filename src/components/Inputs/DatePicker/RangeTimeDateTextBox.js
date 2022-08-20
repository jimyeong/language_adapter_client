import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import CustomRangePicker from './CustomRangePicker';
import TextBoxUIComponent from './UiComponents/TextBoxUIComponent';
import StartDateTimeUIComponent from './UiComponents/StartDateTimeUIComponent';
import EndDateTimeUIComponent from './UiComponents/EndDateTimeUIComponent';

import EndDateUIComponent from './UiComponents/EndDateUIComponent';
import TextBoxDatePickerFrame from './UiComponents/TextBoxDatePickerFrame';
import DatePicker from 'react-datepicker';
const RangeTimeDateTextBoxBlock = styled.div`
    .datepicker__wrapper {
        width: 100%;
    }
`;
const RangeTimeDateTextBox = ({
    onStartDayChange,
    startDay,
    onEndDayChange,
    endDay,
    children,
    ...rest
}) => {
    const filterPassedTime = (startTime) => {
        const currentSelect = new Date(startTime);
        return currentSelect.getTime() > startDay.getTime();
    };

    return (
        <RangeTimeDateTextBoxBlock>
            <TextBoxDatePickerFrame type={1}>
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    customInput={
                        <StartDateTimeUIComponent startDate={startDay} />
                    }
                    selected={startDay}
                    startDate={startDay}
                    onChange={onStartDayChange}
                    selectsStart
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                />
            </TextBoxDatePickerFrame>
            <TextBoxDatePickerFrame type={2}>
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    customInput={<EndDateTimeUIComponent endDate={endDay} />}
                    selected={endDay}
                    startDate={startDay}
                    endDate={endDay}
                    minDate={startDay}
                    selectsEnd
                    onChange={onEndDayChange}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    filterTime={filterPassedTime}
                />
            </TextBoxDatePickerFrame>
        </RangeTimeDateTextBoxBlock>
    );
};

export default RangeTimeDateTextBox;
