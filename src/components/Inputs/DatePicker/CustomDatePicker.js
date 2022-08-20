import React, { useState } from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const { pixelToRem, dateBasicFormatter } = helper;

const CustomDatePickerBlock = styled.div`
    width: 100%;
`;

const CustomDatePicker = ({
    selectedDay,
    customElement,
    onHandleChange,
    value = '',
    name,
    children,
    isDisable = false,
    ...rest
}) => {
    return (
        <CustomDatePickerBlock {...rest}>
            <DatePicker
                dateFormat="yyyy-MM-dd"
                customInput={customElement}
                selected={new Date()}
                onChange={onHandleChange}
                disabled={isDisable}
            />
        </CustomDatePickerBlock>
    );
};

export default CustomDatePicker;
