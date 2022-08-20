import React from 'react';
import styled from 'styled-components';
import { BaseDetailEventView } from '../../../../components/Calendar';
import ScrappController from '../../../../components/Calendar/Scrapper/ScrappController';
import { TextBoxDatePicker } from '../../../../components/Inputs';
import { TitlePanel, UpdangEventDetailFooter } from '..';
import { TrashCanIcon, setSizeableIcon } from '../../../../components/Icons';
import UpdangEventCore from './Body/UpdangEventCore';
import cn from 'classnames';
import helper from '../../../../helper';

const { pixelToRem } = helper;
const UpdangProductsEventDetailBlock = styled.div`
    .detail__title {
        margin-bottom: ${pixelToRem(36)};
    }
    .event_title {
        font-weight: 600;
    }
    .updang__scrapper {
        margin-top: ${pixelToRem(24)};
        margin-bottom: ${pixelToRem(53)};
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

/* 
수정안되고
종일버튼 없고

텍스트 데이트피커(시간은 필요없음)
장학금 레벨설정 셀렉터
*/

const UpdangProductsEventDetail = ({
    title,
    onClickDelete,
    children,
    startDay,
    endDay,
    annoucementDay,
    onChangeScrapLevel,
    scrapLevel,
    onClick,
    emptySpaceHeightFromBottom,
    selectedColor,
    onChangeColorPicker,
    onChangePushSwitch,
    pushSwitchStatus,
    memoTargetName,
    memoTargetValue,
    onChangeMemo,
    onClickGoToDetail,
    onClickButtonSave,
    onClickBackButton,
    ...rest
}) => {
    return null;
    return (
        <UpdangProductsEventDetailBlock {...rest}>
            <BaseDetailEventView
                emptySpaceHeightFromBottom={emptySpaceHeightFromBottom}
                selectedColor={selectedColor}
                onChangeColorPicker={onChangeColorPicker}
                onChangePushSwitch={onChangePushSwitch}
                pushSwitchStatus={pushSwitchStatus}
                memoTargetName={memoTargetName}
                memoTargetValue={memoTargetValue}
                onChangeMemo={onChangeMemo}
                EventTitleComponent={<h3 className="event_title">{title}</h3>}
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
                CoreComponent={
                    <UpdangEventCore
                        startDay={startDay}
                        endDay={endDay}
                        annoucementDay={annoucementDay}
                        onChangeScrapLevel={onChangeScrapLevel}
                        scrapLevel={scrapLevel}
                        onClick={onClick}
                    />
                }
                FooterComponent={
                    <UpdangEventDetailFooter
                        onClickButtonSave={onClickButtonSave}
                        onClickGoToDetail={onClickGoToDetail}
                    />
                }
            />
        </UpdangProductsEventDetailBlock>
    );
};

export default UpdangProductsEventDetail;
