import React from 'react';
import styled from 'styled-components';
import ScrappController from '../../../../../components/Calendar/Scrapper/ScrappController';
import {
    TextBoxDatePicker,
    ScheduleTextBoxDatePicker,
} from '../../../../../components/Inputs';
import cn from 'classnames';
import helper from '../../../../../helper';

const { pixelToRem } = helper;

const UpdangEventCoreBlock = styled.div`
    .updang__scrapper {
        display: inline-block;
    }
`;
const UpdangEventCore = ({
    startDay,
    endDay,
    annoucementDay,
    onChangeScrapLevel,
    scrapLevel,
    ...rest
}) => {
    return (
        <UpdangEventCoreBlock {...rest}>
            <ScrappController
                onChangeScrapLevel={onChangeScrapLevel}
                scrapLevel={scrapLevel}
                className={cn(['updang__scrapper'])}
            />
            <ScheduleTextBoxDatePicker
                type={1}
                selectedDay={startDay}
                onChange={() => {}}
                isDisable={true}
                className={cn(['updang__datepicker', 'type-first'])}
            />
            <ScheduleTextBoxDatePicker
                type={2}
                selectedDay={endDay}
                onChange={() => {}}
                isDisable={true}
                className={cn(['updang__datepicker'])}
            />
            <ScheduleTextBoxDatePicker
                type={3}
                selectedDay={annoucementDay}
                onChange={() => {}}
                isDisable={true}
                className={cn(['updang__datepicker'])}
            />
        </UpdangEventCoreBlock>
    );
};

export default UpdangEventCore;
