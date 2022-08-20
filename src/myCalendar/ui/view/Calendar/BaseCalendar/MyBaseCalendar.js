import React from 'react';
import styled from 'styled-components';
import {
    UpdangCalendar,
    UpdangCalendarStyleContainer,
} from '../../../../../components/Calendar';

const MyBaseCalendarBlock = styled.div``;
const MyBaseCalendar = ({
    onChangeSelectedDate,
    events,
    onChangeMonth,
    children,
    isSmallSize,
    ...rest
}) => {
    return null;
};

export default MyBaseCalendar;
