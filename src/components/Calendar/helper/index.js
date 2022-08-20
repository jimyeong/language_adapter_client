import helper from '../../../helper';
import { formatDate } from '@fullcalendar/react'; // must go before plugins
import React from 'react'; // must go before plugins
const { getIOSStringTime, dateFormatter, checkIfDateInRange } = helper;

const calendarUtils = {
    dayHeaderFormatter: (dateObj) => {
        const { dow } = dateObj;
        const DAY = {
            0: '일',
            1: '월',
            2: '화',
            3: '수',
            4: '목',
            5: '금',
            6: '토',
        };
        return DAY[dow];
    },
    getCalendarTitleFormatted: (marker) => {
        const ymd = {};
        const formatted = formatDate(marker, {
            month: 'numeric',
            year: 'numeric',
            day: 'numeric',
        }).split('/');
        ymd.year = formatted[2];
        ymd.month = formatted[0];
        ymd.day = formatted[1];

        const a = dateFormatter(
            new Date(`${ymd.year}-${ymd.month}-${ymd.day}`),
            'yyyy-LL'
        );
        console.log(['what is a '], a);
        return a;
    },

    setCustomEventContent: (eventInfo) => {
        return (
            <React.Fragment>
                <i>{eventInfo.event.title}</i>
            </React.Fragment>
        );
    },

    // YY-mm-dd ss:mm: , 또는 ISO 타입의 시간 데이터를 YY-mm-dd 형태로 변환해주는 함수
    splitDateFormatWithSpace: (strDate) => {
        const t = strDate.split(' ')[0];
        return t;
    },
    // 원본 데이터에서 그려야할 데이터들을 배열 형태로 뽑아낸다.
    findRenderList: (events, selectedDateStr) => {
        const eventsIndexArr = [];
        events.map((event, key) => {
            const { start, end } = event;
            const a = checkIfDateInRange(selectedDateStr, start, end);
            if (a) return eventsIndexArr.push(key);
        });
        return eventsIndexArr;
    },
    prepareEventData: (eventsArray) => {
        const processedData = eventsArray.map((item, id) => {
            const endDateStr = item.infoEndDt.split(' ')[0];
            const announceDateStr = item.infoAnnounceDt.split(' ')[0];
            const title = item.infoSubject;
            const color = item.infoColor;
            const start = item.infoStartDt;
            const end = getIOSStringTime(endDateStr);
            const announceDate = getIOSStringTime(announceDateStr);
            return {
                title,
                color,
                start,
                end,
                id,
                announceDate,
                ...item,
            };
        });
        return processedData;
    },
    prossessFilteredDataList: (events) => {
        return events.map((event) => {
            const infoStartDt = event.infoStartDt;
            const infoEndDt = event.infoEndDt;
            const infoAnnounceDt = event.infoAnnounceDt;
            const title = event.infoSubject;
            const color = event.infoColor;
            if (event.infoState == 'S') {
                return {
                    ...event,
                    title,
                    color,
                    start: calendarUtils.splitDateFormatWithSpace(infoStartDt),
                    end: calendarUtils.splitDateFormatWithSpace(infoStartDt),
                };
            }
            if (event.infoState == 'E') {
                return {
                    ...event,
                    title,
                    color,
                    start: calendarUtils.splitDateFormatWithSpace(infoEndDt),
                    end: calendarUtils.splitDateFormatWithSpace(infoEndDt),
                };
            }
            if (event.infoState == 'A') {
                return {
                    ...event,
                    title,
                    color,
                    start: calendarUtils.splitDateFormatWithSpace(
                        infoAnnounceDt
                    ),
                    end: calendarUtils.splitDateFormatWithSpace(infoAnnounceDt),
                };
            }
            if (event.infoState == 'M') {
                const start =
                    calendarUtils.splitDateFormatWithSpace(infoStartDt);
                const end = calendarUtils.splitDateFormatWithSpace(infoEndDt);
                let p;
                if (start == end) p = end;
                if (start !== end)
                    p = getIOSStringTime(
                        calendarUtils.splitDateFormatWithSpace(infoEndDt)
                    );
                return {
                    ...event,
                    title,
                    color,
                    start: calendarUtils.splitDateFormatWithSpace(infoStartDt),
                    end: p,
                };
            }
        });
    },
};

export { calendarUtils };
