import React, { useRef } from 'react';
import styled from 'styled-components';
import TitlePanel from './TitlePanel';
import {
    JustifyingContainer,
    ScreenFrameContainer,
} from '../../../components/LayoutContainer';
import { TextBoxDatePicker } from '../../../components/Inputs';
import {
    ContentSwitchPlate,
    ContentTextAreaPlate,
    ContentPlateFrame,
    MaxLengthTextPlate,
} from '../../../components/ContentsPlate';
import { FullSizeButton } from '../../../components/Buttons';
import {
    RootContainer,
    IntializeLayoutContainer,
} from '../../../components/Containers';
import { BaseLayoutConfig } from '../../../components/globalUIconfig';
import { ColorPickerController } from '../../../components/ColorPicker';
import { ApplicationLink } from '.';
import { colors } from '../../colors';

import cn from 'classnames';

import helper from '../../../helper';

const emptySpaceHeight = 60 + parseInt(BaseLayoutConfig.headerHeight[0]);
const { pixelToRem } = helper;
const MemoMaxLength = 100;
const ManagementViewBlock = styled.div`
  .event_title {
    color: #000000
    font-size: ${pixelToRem(16)};
    font-weight: 600;
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
`;

const ManagementView = ({
    emptySpaceHeight,
    type,
    pageTitle,
    eventTitle,
    icon,
    children,
    isDisable,
    onChangeSwitch,
    onChangeMemo,
    onChangeColorPicker,
    currentPickerColor,
    memoName,
    memoValue,
    startDay,
    endDay,
    annoucementDay,
    onClickButtonSave,
    switchStatus,
    ...rest
}) => {
    const setDisableFlag = (type) => {
        return type == 'INFO' ? true : false;
    };

    const footerButtonAreaHeight = 88;
    const textRef = React.createRef();
    return (
        <RootContainer>
            <ScreenFrameContainer
                emptySpaceHeight={emptySpaceHeight + footerButtonAreaHeight}
            >
                <ManagementViewBlock>
                    <TitlePanel title={pageTitle} icon={icon} />
                    <div className="eventitle__wrapper">
                        <JustifyingContainer>
                            <h3 className="event_title">{eventTitle}</h3>
                            <div className="color__picker">
                                <ColorPickerController
                                    selectedColor={
                                        currentPickerColor
                                            ? currentPickerColor
                                            : '#F9C2CA'
                                    }
                                    colors={colors}
                                    onChange={onChangeColorPicker}
                                />
                            </div>
                        </JustifyingContainer>
                    </div>
                    <div>{children}</div>
                    <TextBoxDatePicker
                        type={1}
                        selectedDay={startDay}
                        onChange={() => {}}
                        isDisable={setDisableFlag(type)}
                    />
                    <TextBoxDatePicker
                        type={2}
                        selectedDay={endDay}
                        onChange={() => {}}
                        isDisable={setDisableFlag(type)}
                    />
                    <TextBoxDatePicker
                        type={3}
                        selectedDay={annoucementDay}
                        onChange={() => {}}
                        isDisable={setDisableFlag(type)}
                    />
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
                </ManagementViewBlock>
            </ScreenFrameContainer>
            <div className="emptySpaceHeight" id="portal__target">
                <FullSizeButton onClick={onClickButtonSave}>
                    저장
                </FullSizeButton>
            </div>
        </RootContainer>
    );
};

export default ManagementView;
