import React, { useState } from 'react';
import styled from 'styled-components';

import { MyEventCalendar } from '../view';

import { TitlePanel } from '../view';
import { PlusIcon } from '../../../components/Icons';

import helper, { axiosApi, nativeUtils } from '../../../helper';
import { isAuthenticated } from '../../../helper/authentication';
import { SmallLoadingSpinner } from '../../../components/LoadingSpinner';
import MyCalendarContainer from '../container/MyCalendarContainer';
import { useNavigate, useLocation } from 'react-router-dom';
import { createAlertDialogAction } from '../../../reducers/SystemSlice';
import { SearchBarHeaderContainer } from '../../../components/LayoutContainer';
import { MyUnAuthedCalendarContainer } from '../container';
import { calendarUtils } from '../../../components/Calendar/helper';
import { routes } from '../../routes';
import { getEvents } from '../../api';
import { useEffect } from 'react';

const {
    prepareEventData,
    getCalendarTitleFormatted,
    prossessFilteredDataList,
} = calendarUtils;
const { dateFormatter } = helper;
const MyAuthedCalendarContainerBlock = styled.div`
    height: 100%;
`;
const MyAuthedCalendarContainer = ({ children, ...rest }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const calToday = dateFormatter(new Date(), 'yyyy-LL');
    const [calCurrent, setCalCurrent] = useState(calToday);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const mid = localStorage.getItem('mid');
    const [pageState, setPageState] = useState({
        events: [],
        selectedDate: null,
    });
    // 날짜 클릭시
    const onChangeSelectedDate = (date) =>
        setPageState({ ...pageState, selectedDate: date });

    const onClickEventItem = (k) => {
        k.startDate = k.start;
        k.endDate = k.end;
        // 개인일정
        if (k.infoType === 'MINE') {
            return navigate(`${routes.myDetail}/${k.infoNo}`, {
                state: k,
            });
        }

        // 스크랩(장학지원)의 경우 type CPAS | OTHE 고칠 수 없음
        if (k.infoType !== 'MINE') {
            return navigate(`${routes.infoDetail}/${k.infoNo}`, {
                state: k,
            });
        }
    };

    const callApi = async () => {
        const body = {
            calType: 'MINE', // MINE 이 맞다.
            calCurrent: dateFormatter(new Date(calCurrent), 'yyyy-LL'), // 서버에서 원하는 포맷으로
        };
        setLoading(true);
        const { data } = await getEvents(body);
        if (data) {
            setLoading(false);
            const {
                result: { infoList: events, calToday },
            } = data;
            //  const processedEventData = prepareEventData(events);
            return setPageState({
                ...pageState,
                events: prossessFilteredDataList(events),
            });
        }
        if (!data) {
            setLoading(false);
            setError(true);
        }
    };

    const showLoadingSpinner = (loading) => {
        if (loading) return <SmallLoadingSpinner />;
        return null;
    };

    const onClickAddMyEvent = () => {
        navigate(`${routes.addMySchedule}`, {
            state: { mid },
        });
    };

    const onChangeMonth = (currentCalendarDate) => {
        const calCurrent = dateFormatter(currentCalendarDate, 'yyyy-LL');
        setCalCurrent(calCurrent);
    };

    useEffect(() => {
        callApi();
    }, [calCurrent]);
    return (
        <MyAuthedCalendarContainerBlock>
            <TitlePanel
                title="My캘린더"
                icon={<PlusIcon onClick={onClickAddMyEvent} fill="#707070" />}
            />
            <div className="calendar__wrapper">
                <MyCalendarContainer
                    selectedDate={pageState.selectedDate}
                    events={pageState.events}
                    onChangeSelectedDate={onChangeSelectedDate}
                    onClickEventItem={onClickEventItem}
                    onChangeMonth={onChangeMonth}
                />
            </div>
            {showLoadingSpinner(loading)}
        </MyAuthedCalendarContainerBlock>
    );
};

export default MyAuthedCalendarContainer;
