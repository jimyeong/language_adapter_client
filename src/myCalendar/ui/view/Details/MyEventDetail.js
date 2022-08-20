import React from 'react';
import styled from 'styled-components';
import { BaseDetailEventView } from '../../../../components/Calendar';
import ScrappController from '../../../../components/Calendar/Scrapper/ScrappController';
import { TextBoxDatePicker } from '../../../../components/Inputs';
import { TitlePanel, MyEventDetailFooter } from '..';
import { TrashCanIcon, setSizeableIcon } from '../../../../components/Icons';
import { ManagementTypingTitle, ManagementTypingTitleWithValidation } from '..';
import MyEventCore from './Body/MyEventCore';
import cn from 'classnames';
import helper from '../../../../helper';

const { pixelToRem } = helper;
const MyEventDetailBlock = styled.div`
    .detail__title {
        margin-bottom: ${pixelToRem(36)};
    }
    .type__label {
        margin-top: ${pixelToRem(18)};
    }
    .myevent__alldayswitch {
        margin-top: ${pixelToRem(18)};
        margin-bottom: ${pixelToRem(20)};
    }
    .updang__datepicker {
        margin-top: ${pixelToRem(10)};
        &.type-first {
            margin-top: 0;
        }
    }
    .content__frame {
        &.type-first {
            margin-top: ${pixelToRem(22)};
        }
        margin-top: ${pixelToRem(8)};
    }
`;
const MyEventDetail = ({
    eventTitle,
    onChangeEventTitle,
    eventTitleName,
    onClickDelete,
    startDay,
    onStartDayChange,
    endDay,
    onEndDayChange,
    emptySpaceHeightFromBottom,
    selectedColor,
    onChangeColorPicker,
    isAllDay,
    onChangeAllDay,
    onChangePushSwitch,
    pushSwitchStatus,
    memoTargetName,
    memoTargetValue,
    onChangeMemo,
    onClickButtonSave,
    validateMessageShow,
    validateMessage,
    onClickBackButton,
    children,
    ...rest
}) => {
    return (
        <MyEventDetailBlock>
            <BaseDetailEventView
                emptySpaceHeightFromBottom={emptySpaceHeightFromBottom}
                selectedColor={selectedColor}
                onChangeColorPicker={onChangeColorPicker}
                onChangePushSwitch={onChangePushSwitch}
                pushSwitchStatus={pushSwitchStatus}
                memoTargetName={memoTargetName}
                memoTargetValue={memoTargetValue}
                onChangeMemo={onChangeMemo}
                onClickBackButton={onClickBackButton}
                TitleComponent={
                    <TitlePanel
                        className={cn(['detail__title'])}
                        title="My 일정관리"
                        icon={setSizeableIcon(
                            <TrashCanIcon
                                fill="#727272"
                                stroke="#727272"
                                onClick={onClickDelete}
                            />
                        )}
                    />
                }
                EventTitleComponent={
                    <ManagementTypingTitleWithValidation
                        value={eventTitle}
                        onChange={onChangeEventTitle}
                        name={eventTitleName}
                        placeholder="타이틀을 입력하세요, 30자이내"
                        validateMessage={validateMessage}
                        validateMessageShow={validateMessageShow}
                    />
                }
                CoreComponent={
                    <MyEventCore
                        isAllDay={isAllDay}
                        onChangeAllDay={onChangeAllDay}
                        startDay={startDay}
                        onStartDayChange={onStartDayChange}
                        endDay={endDay}
                        onEndDayChange={onEndDayChange}
                    />
                }
                FooterComponent={
                    <MyEventDetailFooter
                        onClickButtonSave={onClickButtonSave}
                    />
                }
            />
        </MyEventDetailBlock>
    );
};

export default MyEventDetail;
