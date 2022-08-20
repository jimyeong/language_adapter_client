import React from 'react';
import styled from 'styled-components';
import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    CustomHeaderTitle,
    UpdangCalendarStyleContainer,
    HeightControllerBlock,
} from '../../../../components/Calendar';
import { calendarUtils } from '../../../../components/Calendar/helper';
import helper from '../../../../helper';
const { compareDate } = helper;
const { dayHeaderFormatter } = calendarUtils;

const MyUnAuthorizedCalendar = ({
    events,
    onChangeSelectedDate,
    children,
    onArrowClick,
    isSmallSize,
    height,
    ...rest
}) => {
    // 화살표 클릭했을 때
    const onClickArrowButton = (event, el) => {
        onArrowClick && onArrowClick();
    };
    // 날짜 클릭했을 때
    const handleDateClick = (selectedDate, b, c) => {
        onChangeSelectedDate && onChangeSelectedDate();
    };
    const moreLinkClick = (a) => {
        return true;
    };
    return null; /* 
    return (
        <HeightControllerBlock height={height}>
            <UpdangCalendarStyleContainer isSmallSize={isSmallSize}>
                <FullCalendar
                    events={events}
                    moreLinkClick={moreLinkClick}
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    dateClick={handleDateClick}
                    dayHeaderContent={dayHeaderFormatter}
                    dayHeaderClassNames={['custom__dayheader']}
                    headerToolbar={{
                        start: 'PrevNavigationButton',
                        center: 'title',
                        end: 'NextNavigationButton',
                    }}
                    titleFormat={(titleProps) => {
                        return <CustomHeaderTitle titleProps={titleProps} />;
                    }}
                    customButtons={{
                        PrevNavigationButton: {
                            text: '<',
                            hint: 'navigation button to the previous month',
                            click: onClickArrowButton,
                        },
                        NextNavigationButton: {
                            text: '>',
                            hint: 'navigation button to the previous month',
                            click: onClickArrowButton,
                        },
                    }}
                />
            </UpdangCalendarStyleContainer>
        </HeightControllerBlock>
    ); */
};

export default MyUnAuthorizedCalendar;
