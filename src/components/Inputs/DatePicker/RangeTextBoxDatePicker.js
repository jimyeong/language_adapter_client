import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import CustomRangePicker from './CustomRangePicker';
import TextBoxUIComponent from './UiComponents/TextBoxUIComponent';
import StartDateUIComponent from './UiComponents/StartDateUIComponent';
import EndDateUIComponent from './UiComponents/EndDateUIComponent';
import TextBoxDatePickerFrame from './UiComponents/TextBoxDatePickerFrame';
import DatePicker from 'react-datepicker';

const { pixelToRem } = helper;

const RangeTextBoxDatePickerBlock = styled.div`
    .datepicker__wrapper {
        width: 100%;
    }
`;
const RangeTextBoxDatePicker = ({
    onStartDayChange,
    startDay,
    onEndDayChange,
    endDay,
    children,
    ...rest
}) => {
    return (
        <RangeTextBoxDatePickerBlock>
            <TextBoxDatePickerFrame type={1}>
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    customInput={<StartDateUIComponent startDate={startDay} />}
                    selected={startDay}
                    startDate={startDay}
                    onChange={onStartDayChange}
                    selectsStart
                />
            </TextBoxDatePickerFrame>
            <TextBoxDatePickerFrame type={2}>
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    customInput={<EndDateUIComponent endDate={endDay} />}
                    selected={endDay}
                    startDate={startDay}
                    endDate={endDay}
                    minDate={startDay}
                    selectsEnd
                    onChange={onEndDayChange}
                />
            </TextBoxDatePickerFrame>
        </RangeTextBoxDatePickerBlock>
    );
};

export default RangeTextBoxDatePicker;

/* <CustomRangePicker
        customStartElement={<StartDateUIComponent startDate={startDate} />}
        customEndElement={<EndDateUIComponent endDate={endDate} />}
      /> */
