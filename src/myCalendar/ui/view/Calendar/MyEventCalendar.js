import React from 'react';
import styled from 'styled-components';
import MyBaseCalendar from './BaseCalendar/MyBaseCalendar';
import { HeightControllerBlock } from '../../../../components/Calendar';

const MyEventCalendar = ({
    onChangeSelectedDate,
    events,
    height = '500px',
    onChangeMonth,
    children,
    ...rest
}) => {
    return (
        <HeightControllerBlock height={height}>
            <MyBaseCalendar
                isSmallSize={false}
                events={events}
                height={height}
                onChangeMonth={onChangeMonth}
                onChangeSelectedDate={onChangeSelectedDate}
            />
        </HeightControllerBlock>
    );
};

export default MyEventCalendar;
