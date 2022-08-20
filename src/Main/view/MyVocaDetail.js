import React from 'react';
import styled from 'styled-components';
import { BaseDetailEventView } from '../../components/Calendar';
import { ManagementTypingTitleWithValidation } from '../../myCalendar/ui/view';
import { TitlePanel } from '../../myCalendar/ui/view';
import { TrashCanIcon, setSizeableIcon } from '../../components/Icons';
import { MyVocaDetailCore, MyVocaDetailFooter } from '..';

import cn from 'classnames';

const MyVocaDetailBlock = styled.div``;
const MyVocaDetail = ({
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
        <MyVocaDetailBlock>
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
                CoreComponent={null}
                FooterComponent={
                    <MyVocaDetailFooter onClickButtonSave={onClickButtonSave} />
                }
            />
        </MyVocaDetailBlock>
    );
};

export default MyVocaDetail;
