import React from 'react';
import styled from 'styled-components';
import { MyEventCalendar } from '../view';
import CurrentEventsContainer from './CurrentEventsContainer';
import { calendarUtils } from '../../../components/Calendar/helper';

const MyCalendarContainerBlock = styled.div`
  height: 100%;
`;

const MyCalendarContainer = ({
  onChangeMonth,
  onChangeSelectedDate,
  selectedDate,
  events,
  children,
  onClickEventItem,
  ...rest
}) => {
  return (
    <MyCalendarContainerBlock>
      <MyEventCalendar
        onChangeMonth={onChangeMonth}
        onChangeSelectedDate={onChangeSelectedDate}
        events={events}
      />
      <CurrentEventsContainer
        onClickEventItem={onClickEventItem}
        selectedDate={selectedDate}
        events={events}
      />
    </MyCalendarContainerBlock>
  );
};

export default MyCalendarContainer;
