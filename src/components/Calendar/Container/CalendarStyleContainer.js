import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import { BaseLayoutConfig } from '../../globalUIconfig';
const primaryColor = '#344ceb';
export const CalendarStyleContainer = styled.div`
    height: ${(props) => (props.isSmallSize ? '70%' : '100%')};
    box-shadow: 3px ​5px 6px 1px rgba(0, 0, 0, 0.05);
    .fc-scrollgrid-sync-table {
        width: 100%;
    }
    // 달력이 height를 안주면, 가용영역만큼만 사이즈를 잡고 객체가 만들어진다. 스크롤이 생겨버림
    .fc-media-screen {
        // height: 548px;
        // height: 600px;
        height: 100%;
    }
    // 달력헤더
    .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 0 !important;
        background: ${BaseLayoutConfig.primaryColor};
    }
    // 달력헤더 모서리 라운딩
    .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
        border-radius: 15px;
        overflow: hidden;
    }

    // 달력 요일indicator 및 요일 container
    .fc .fc-view-harness-active > .fc-view {
        padding: 0 15px;
        background-color: #f1f1f1;
    }
    .fc-scrollgrid.fc-scrollgrid-liquid {
        border: none;
    }

    // 요일 indicater
    .fc-theme-standard .fc-scrollgrid {
        border-top: none;
    }

    // 일요일 indicator
    .fc-col-header-cell.fc-day.fc-day-sun {
        .fc-col-header-cell-cushion {
            color: #e80707 !important;
        }
    }

    .fc-daygrid-day-number {
        font-size: 14px !important;
    }

    // sunday indicator
    .fc-col-header-cell.fc-day.fc-day-sat {
        .fc-col-header-cell-cushion {
            color: #8ea4e2 !important;
        }
    }
    .fc-day-sat {
        .fc-daygrid-day-number {
            color: #8ea4e2 !important;
        }
    }

    // 숫자들어가는 달력몸체
    .fc-scrollgrid-sync-table {
        background-color: #f1f1f1;
    }
    // 요일header
    .custom__dayheader {
        font-size: 14px;
        background-color: #f1f1f1;
        padding-top: 20px;
    }

    // 요일에 해당하는 박스영역
    .fc .fc-daygrid-day-frame {
        &:active {
            // background-color: #e8e8e8;
        }
        padding-top: 4px;
    }
    // 오늘에 해당하는 날짜 박스영역
    .fc .fc-daygrid-day.fc-day-today {
        background-color: transparent;
        .fc-daygrid-day-number {
            background-color: #8ea4e2;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            text-align: center;
            vertical-align: middle;
            &:before {
                content: '';
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    // 일에 해당하는 박스영역
    .fc-daygrid-day.fc-day {
        color: #727272;
    }
    // 요일중 일요일
    .fc-day-sun {
        .fc-daygrid-day-number {
            color: #e80707 !important;
        }
    }

    .fc-day-today {
        .fc-daygrid-day-number {
            color: white !important;
        }
    }

    // 요일 border
    .fc-theme-standard td,
    .fc-theme-standard th {
        border: none;
        border-bottom: 1px solid #ddd;
    }
    // z-index 스케줄 띠
    .fc .fc-daygrid-event-harness-abs {
        z-index: 3;
    }

    // 버튼들 색상
    .fc .fc-button-primary {
        background-color: ${primaryColor};
        border: none;
    }
    .first-event {
        background-color: green;
    }
    .second-event {
        background-color: black;
    }

    // more 폰트
    .fc .fc-daygrid-more-link {
        font-size: 12px;
    }

    // navigation button
    .fc-PrevNavigationButton-button,
    .fc-NextNavigationButton-button {
        width: 45px;
        height: 100% !important;
        background-color: ${BaseLayoutConfig.primaryColor} !important;
        border: none !important;
        display: inline-block;
        box-shadow: none !important;
        &:focus {
            outline: none !important;
        }
    }

    .fc-event-main {
        font-size: 12px;
        color: #222 !important;
        overflow: hidden;
    }

    // custom title
    .customHeaderTitle {
        color: #f3f3f3;
        font-size: 16px;
    }
    .fc .fc-highlight {
        outline: 1px solid #717171;
        border-radius: 5px;
        background: transparent !important;
    }
    .fc-dayGridMonth-view {
        height: 100%;
        // overflow-y: scroll;
        overflow-y: hidden;
        border-radius: 0 0 15px 15px;
    }
    .fc-scroller-harness.fc-scroller-harness-liquid {
        overflow: auto;
    }
    .fc-day.fc-daygrid-day {
        height: 90px;
    }

    // script로 height값 조절 되는 듯
    /* .fc-scrollgrid-sync-table {
  height: 772px;
} */
    /* 스케줄 띠, date 클릭이벤트가 잘 먹도록,  z-index 3->0 으로 낮춘다.*/
    .dUASJO .fc .fc-daygrid-event-harness-abs {
        //z-index: 0;
    }
    .fc-daygrid-event-harness-abs {
        z-index: 0 !important;
    }
    .fc-event .fc-event-main {
        z-index: 0;
    }

    // events 띠가 시작하는 지점 클릭이 잘 안먹어서, position으로 background가 들어오는 영역 위로 띄워줌, 어차피 띠는 클릭할 일 없으니까
    .fc-daygrid-day-bg {
        position: absolute;
        z-index: 10;
        height: 100%;
        width: 100%;
        top: 0;
    }
`;

export default CalendarStyleContainer;
