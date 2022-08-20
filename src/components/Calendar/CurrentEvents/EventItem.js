import React from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
const { pixelToRem, setColor } = helper;
const EventItemBlock = styled.li`
    display: table;
    width: 100%;

    &.active {
        background: ${(props) => setColor('#f1f1f1', -20)};
    }
    & + & {
        margin-top: ${pixelToRem(5)};
    }
    .colour-chip {
        width: 100%;
        height: ${pixelToRem(4)};
    }
    .tbl-col {
        display: table-cell;
        &.type-colour {
            width: ${pixelToRem(66)};
            vertical-align: top;
            padding-top: ${pixelToRem(6)};
            padding-right: ${pixelToRem(18)};
        }
        .column__tit {
            font-size: ${pixelToRem(14)};
            color: #727272;
            line-height: 1.3;
        }
    }
`;

/* 
event type
    infoNo : 정보고유번호
    infoType : 정보타입(정보:INFO, 회원입력정보 :MINE)
    infoSubject : 정보제목
    infoStartDt : 정보시작일
    infoEndDt : 정보마감일
    infoAnnounce : 정보발표일 (MINE 일경우 NULL)
    infoColor: 색상
    // customAttr 
    title, color, start, end, id,
*/
const EventItem = ({ onClickCallback, events, index, children, ...rest }) => {
    const event = events[index];
    const {
        title,
        color,
        start,
        end,
        id,
        infoColor,
        infoAnnounceDt,
        infoType,
    } = event;

    const onClick = (e) => {
        if (onClickCallback) onClickCallback(event);
    };
    return (
        <EventItemBlock onClick={onClick}>
            <div className="tbl-col type-colour">
                <div
                    style={{ backgroundColor: color }}
                    className="colour-chip"
                ></div>
            </div>
            <div className="tbl-col">
                <h3 className="column__tit">{title}</h3>
            </div>
        </EventItemBlock>
    );
};

export default EventItem;
