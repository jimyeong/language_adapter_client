import React from 'react';
import styled from 'styled-components';
import { colors } from '../../ColorPicker';

import {
    BackButtonContainer,
    RootContainer,
    DialogBackButtonContainer,
} from '../../Containers';
import {
    ScreenFrameContainer,
    JustifyingContainer,
    SmartJustifyingContainer,
} from '../../LayoutContainer';
import { ColorPickerController } from '../../ColorPicker';
import {
    ContentSwitchPlate,
    ContentPlateFrame,
    MaxLengthTextPlate,
} from '../../ContentsPlate';
import cn from 'classnames';
import helper from '../../../helper';

const { pixelToRem } = helper;

const backButtonSpace = 80;

const textRef = React.createRef();
const BaseDetailEventViewBlock = styled.div`
    .color__picker {
        font-size: 0;
        margin-top: ${pixelToRem(6)};
    }
    .eventitle__wrapper {
        // margin-top: ${pixelToRem(36)};
        // margin-bottom: ${pixelToRem(34)};
    }
`;
const BaseDetailEventView = ({
    emptySpaceHeightFromBottom = 0,
    selectedColor,
    onChangeColorPicker,
    children,
    onChangePushSwitch,
    pushSwitchStatus,
    memoTargetName,
    memoTargetValue,
    onChangeMemo,
    TitleComponent,
    CoreComponent,
    FooterComponent,
    EventTitleComponent,
    onClickBackButton,
    ...rest
}) => {
    const MemoMaxLength = 1000;
    return (
        <DialogBackButtonContainer
            onClickBackButton={onClickBackButton}
            backButtonSpace={60}
        >
            <BaseDetailEventViewBlock {...rest}>
                <RootContainer>
                    <ScreenFrameContainer
                        emptySpaceHeight={emptySpaceHeightFromBottom}
                    >
                        {TitleComponent}
                        <div className="eventitle__wrapper">
                            <SmartJustifyingContainer verticalAlign={1}>
                                {/* editable or not */}
                                {/* <h3 className="event_title">{eventTitle}</h3> */}
                                {EventTitleComponent}
                                <div className="color__picker">
                                    <ColorPickerController
                                        selectedColor={selectedColor}
                                        colors={colors}
                                        onChange={onChangeColorPicker}
                                    />
                                </div>
                            </SmartJustifyingContainer>
                        </div>
                        {/* body */}
                        {CoreComponent}
                        <div className="inputbox__wrapper">
                            <ContentSwitchPlate
                                label="알림"
                                callback={onChangePushSwitch}
                                switchStatus={pushSwitchStatus}
                                className={cn(['content__frame', 'type-first'])}
                            />
                            <ContentPlateFrame
                                onClickCallback={() => textRef.current.focus()}
                                className={cn([
                                    'memo__frame',
                                    'content__frame',
                                ])}
                                label="메모"
                            ></ContentPlateFrame>
                            <MaxLengthTextPlate
                                targetName={memoTargetName}
                                value={memoTargetValue}
                                onChange={onChangeMemo}
                                maxLength={MemoMaxLength}
                                ref={textRef}
                                className={cn([
                                    'memo__frame',
                                    'content__frame',
                                ])}
                            />
                        </div>
                    </ScreenFrameContainer>
                    {FooterComponent}
                </RootContainer>
            </BaseDetailEventViewBlock>
        </DialogBackButtonContainer>
    );
};

export default BaseDetailEventView;
