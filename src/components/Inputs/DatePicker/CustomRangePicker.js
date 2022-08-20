import React, { useState } from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const { pixelToRem, dateBasicFormatter } = helper;

const CustomRangePickerBlock = styled.div`
    width: 100%;
`;

const CustomRangePicker = ({
    startDate,
    endDate,
    customStartElement,
    customEndElement,
    onStartDateChange,
    onEndDateChange,
    name,
    children,
    isDisable = false,
    ...rest
}) => {
    return (
        <CustomRangePickerBlock {...rest}>
            <DatePicker
                dateFormat="yyyy-MM-dd"
                customInput={customStartElement}
                selected={startDate}
                startDate={startDate}
                onChange={onStartDateChange}
                selectsStart
            />
            <DatePicker
                dateFormat="yyyy-MM-dd"
                customInput={customEndElement}
                selected={endDate}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                selectsEnd
                onChange={onEndDateChange}
            />
        </CustomRangePickerBlock>
    );
};

export default CustomRangePicker;
