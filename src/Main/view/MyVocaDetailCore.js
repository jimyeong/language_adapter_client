import React from 'react';
import styled from 'styled-components';
import { AllDaySwitch } from '../../myCalendar/ui/view';
import {
    RangeTimeDateTextBox,
    RangeTextBoxDatePicker,
} from '../../components/Inputs';
import cn from 'classnames';
import helper from '../../helper';
const { pixelToRem } = helper;

const MyVocaDetailCoreBlock = styled.div`
    .type__label {
        font-weight: 600;
        color: #9579c9;
        font-size: ${pixelToRem(12)};
    }
`;
const MyVocaDetailCore = ({
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
        <MyVocaDetailCoreBlock>
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
        </MyVocaDetailCoreBlock>
    );
};

export default MyVocaDetailCore;
