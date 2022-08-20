import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CustomHeaderTitle from './Title/CustomHeaderTitle';
import CalendarStyleContainer from './Container/CalendarStyleContainer';
import HeightControllerBlock from './Container/HeightControllerBlock';
import helper from '../../helper';
import { calendarUtils } from './helper';
const { compareDate } = helper;
const { dayHeaderFormatter, setCustomEventContent } = calendarUtils;

/* original */
const Calendar = ({
    events,
    onChangeSelectedDate,
    onChangeMonth,
    children,
    ...rest
}) => {
    const calendarRef = useRef();
    let calendarState = { titleProps: null };
    const onNextArrowClick = (event, el) => {
        const calendarApi = calendarRef.current.getApi();
        // console.log(['titleProps BBBBBBBBBB'], calendarState.titleProps);
        calendarApi.next();
        if (onChangeMonth) onChangeMonth(calendarApi.getDate());
        // console.log(['titleProps CCCCCC'], calendarApi.getDate());
    };
    const onPrevArrowClick = (event, el) => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.prev();
        if (onChangeMonth) onChangeMonth(calendarApi.getDate());
    };

    const handleDateClick = (selectedDate, b, c) => {
        const calendarApi = calendarRef.current.getApi();
        const { date } = selectedDate;
        calendarApi.select(date);
        if (onChangeSelectedDate) {
            onChangeSelectedDate(selectedDate);
        }
    };
    const moreLinkClick = (a) => {
        return true;
    };
    return (
        <HeightControllerBlock height="700px">
            <CalendarStyleContainer>
                <FullCalendar
                    moreLinkContent={(moreLinkButton) => {
                        // <span>{...}</span>;
                        return <span>{moreLinkButton.shortText}</span>;
                    }}
                    moreLinkClick={moreLinkClick}
                    ref={calendarRef}
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    dateClick={handleDateClick}
                    selectable={false}
                    eventContent={setCustomEventContent}
                    events={events}
                    dayMaxEventRows={true}
                    dayHeaderContent={dayHeaderFormatter}
                    dayHeaderClassNames={['custom__dayheader']}
                    headerToolbar={{
                        start: 'PrevNavigationButton',
                        center: 'title',
                        end: 'NextNavigationButton',
                    }}
                    titleFormat={(titleProps) => {
                        calendarState.titleProps = titleProps;
                        return (
                            <CustomHeaderTitle
                                onChangeMonth={onChangeMonth}
                                titleProps={titleProps}
                            />
                        );
                    }}
                    customButtons={{
                        PrevNavigationButton: {
                            text: '<',
                            hint: 'navigation button to the previous month',
                            click: onPrevArrowClick,
                        },
                        NextNavigationButton: {
                            text: '>',
                            hint: 'navigation button to the previous month',
                            click: onNextArrowClick,
                        },
                    }}
                />
            </CalendarStyleContainer>
        </HeightControllerBlock>
    );
};

export default Calendar;
