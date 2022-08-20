import React from 'react';
import styled from 'styled-components';
import ScrappController from '../../../../../components/Calendar/Scrapper/ScrappController';
import {
    RangeTextBoxDatePicker,
    RangeTimeDateTextBox,
} from '../../../../../components/Inputs';
import cn from 'classnames';
import helper from '../../../../../helper';
import { AllDaySwitch } from '../..';

const { pixelToRem } = helper;

const MyEventCoreBlock = styled.div`
    .type__label {
        font-weight: 600;
        color: #9579c9;
        font-size: ${pixelToRem(12)};
    }
`;
const MyEventCore = ({
    isAllDay,
    onChangeAllDay,
    startDay,
    onStartDayChange,
    endDay,
    onEndDayChange,
    children,
    ...rest
}) => {
    const isAllDayFlag = (isAllDay) => {
        if (isAllDay == '1') return true;
        return false;
    };
    return (
        <MyEventCoreBlock>
            <h3 className="type__label">개인일정</h3>
            <AllDaySwitch
                callback={onChangeAllDay}
                className={cn(['myevent__alldayswitch'])}
                switchStatus={isAllDay}
            />
            {!isAllDayFlag(isAllDay) && (
                <RangeTimeDateTextBox
                    startDay={startDay}
                    endDay={endDay}
                    onStartDayChange={onStartDayChange}
                    onEndDayChange={onEndDayChange}
                />
            )}
            {isAllDayFlag(isAllDay) && (
                <RangeTextBoxDatePicker
                    startDay={startDay}
                    endDay={endDay}
                    onStartDayChange={onStartDayChange}
                    onEndDayChange={onEndDayChange}
                />
            )}
        </MyEventCoreBlock>
    );
};

export default MyEventCore;
