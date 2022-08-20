import React, { useRef } from 'react';
import styled from 'styled-components';
import TitlePanel from './TitlePanel';
import {
    JustifyingContainer,
    ScreenFrameContainer,
} from '../../../components/LayoutContainer';
import {
    RootContainer,
    IntializeLayoutContainer,
    BackButtonContainer,
} from '../../../components/Containers';
import {
    TextBoxDatePicker,
    RangeTextBoxDatePicker,
    RangeTimeDateTextBox,
} from '../../../components/Inputs';
import {
    ContentSwitchPlate,
    ContentTextAreaPlate,
    ContentPlateFrame,
    MaxLengthTextPlate,
} from '../../../components/ContentsPlate';
import { FullSizeButton } from '../../../components/Buttons';
import { BaseLayoutConfig } from '../../../components/globalUIconfig';
import { ColorPickerController } from '../../../components/ColorPicker';
import { ApplicationLink } from '.';
import { colors } from '../../colors';
import AllDaySwitch from './AllDaySwitch';
import ManagementTypingTitle from './ManagementTypingTitle';

import cn from 'classnames';

import helper from '../../../helper';

const emptySpaceHeight = 60 + parseInt(BaseLayoutConfig.headerHeight[0]);
const { pixelToRem } = helper;
const MemoMaxLength = 100;
const MyEventManagementViewBlock = styled.div`
.event_title {
  color: #000000
  font-size: ${pixelToRem(16)};
  font-weight: 600;
}
.type__label{
    font-weight: 600;
    color: #9579C9;
    font-size: ${pixelToRem(12)};
}
.eventitle__wrapper{
    margin-top: ${pixelToRem(36)};
    margin-bottom: ${pixelToRem(34)};
}
.inputbox__wrapper{
  margin-top: ${pixelToRem(30)};
}
.memo__frame{
  margin-top: ${pixelToRem(16)};
}
.myevent__alldayswitch{
   margin-top: ${pixelToRem(20)};
   margin-bottom: ${pixelToRem(26)};
}
`;

const textRef = React.createRef();
const MyEventManagementView = ({
    emptySpaceHeight,
    pageTitle,
    children,
    onChangeSwitch,
    onChangeAllDay,
    onChangeMemo,
    onChangeColorPicker,
    currentPickerColor,
    memoName,
    memoValue,
    startDay,
    onStartDayChange,
    endDay,
    onEndDayChange,
    onClickButtonSaveCallback,
    switchStatus,
    isAllDay,
    eventTitleName,
    eventTitle,
    onChangeEventTitleChange,
    icon,
    ...rest
}) => {
    const footerButtonSize = 46;
    const onClickSave = () => {
        if (onClickButtonSaveCallback) onClickButtonSaveCallback();
    };
    return (
        <BackButtonContainer backButtonSpace={emptySpaceHeight}>
            <RootContainer>
                <ScreenFrameContainer
                    emptySpaceHeight={emptySpaceHeight + footerButtonSize}
                >
                    <MyEventManagementViewBlock>
                        <TitlePanel title={pageTitle} icon={icon} />
                        <div className="eventitle__wrapper">
                            <JustifyingContainer>
                                <ManagementTypingTitle
                                    value={eventTitle}
                                    onChange={onChangeEventTitleChange}
                                    name={eventTitleName}
                                    placeholder="타이틀을 입력하세요, 30자이내"
                                />
                                <div className="color__picker">
                                    <ColorPickerController
                                        selectedColor={currentPickerColor}
                                        colors={colors}
                                        onChange={onChangeColorPicker}
                                    />
                                </div>
                            </JustifyingContainer>
                        </div>
                        <h3 className="type__label">개인일정</h3>
                        <AllDaySwitch
                            callback={onChangeAllDay}
                            className="myevent__alldayswitch"
                        />
                        {!isAllDay && (
                            <RangeTimeDateTextBox
                                startDay={startDay}
                                endDay={endDay}
                                onStartDayChange={onStartDayChange}
                                onEndDayChange={onEndDayChange}
                            />
                        )}
                        {isAllDay && (
                            <RangeTextBoxDatePicker
                                startDay={startDay}
                                endDay={endDay}
                                onStartDayChange={onStartDayChange}
                                onEndDayChange={onEndDayChange}
                            />
                        )}
                        <div className="inputbox__wrapper">
                            <ContentSwitchPlate
                                label="알림"
                                callback={onChangeSwitch}
                                switchStatus={switchStatus}
                            />
                            <ContentPlateFrame
                                onClickCallback={() => textRef.current.focus()}
                                className={cn(['memo__frame'])}
                                label="메모"
                            ></ContentPlateFrame>
                            <MaxLengthTextPlate
                                targetName={memoName}
                                value={memoValue}
                                onChange={onChangeMemo}
                                maxLength={MemoMaxLength}
                                ref={textRef}
                            />
                        </div>
                    </MyEventManagementViewBlock>
                </ScreenFrameContainer>
                <div className="emptySpaceHeight" id="portal__target">
                    <FullSizeButton onClick={onClickSave}>저장</FullSizeButton>
                </div>
            </RootContainer>
        </BackButtonContainer>
    );
};

export default MyEventManagementView;
