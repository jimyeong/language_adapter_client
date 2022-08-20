import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMatch } from 'react-router-dom';
import useAsync from '../../../helper/useAsync';
import helper, { axiosApi, nativeUtils } from '../../../helper';
import { isAuthenticated } from '../../../helper/authentication';
import { SmallLoadingSpinner } from '../../../components/LoadingSpinner';
import MyCalendarContainer from '../container/MyCalendarContainer';
import { PlusIcon } from '../../../components/Icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { createAlertDialogAction } from '../../../reducers/SystemSlice';
import { SearchBarHeaderContainer } from '../../../components/LayoutContainer';
import {
    MyUnAuthedCalendarContainer,
    MyAuthedCalendarContainer,
} from '../container';

import { useDispatch } from 'react-redux';

import {
    IntializeLayoutContainer,
    RootContainer,
} from '../../../components/Containers';
import { TitlePanel } from '../view';
import { getEvents } from '../../api';
import { routes } from '../../routes';

const { getIOSStringTime, dateFormatter, clearAllLotationState } = helper;

const { get, post } = axiosApi;
const { pixelToRem } = helper;

const MyCalendarPageBlock = styled.div`
    height: 100%;
    .calendar__wrapper {
        height: 100%;
        margin-top: ${pixelToRem(24)};
    }
`;

const MyCalendarPage = ({ children, ...rest }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const setSystemAlert = (onOffFlag, message) => {
        return dispatch(createAlertDialogAction(onOffFlag, message));
    };

    useEffect(() => {
        const { state } = location;
        const SECONDS = 2000;
        const showAlertDialogMessage = (state) => {
            if (!state) return false;
            if (state.flag === -1) return false;
            if (state.flag !== -1) return true;
            return false;
        };
        if (showAlertDialogMessage(state)) {
            clearAllLotationState(); // 세션초기화
            setSystemAlert(true, state.message);

            // 종료
            setTimeout(() => {
                setSystemAlert(false, null);
            }, SECONDS);
        }
        return () => {};
    }, [location.state]);

    // 페이지 render
    const RenderPageContent = () => {
        if (isAuthenticated()) {
            return <MyAuthedCalendarContainer />;
        } else {
            return <MyUnAuthedCalendarContainer />;
        }
    };

    return (
        <React.Fragment>
            <SearchBarHeaderContainer />
            <IntializeLayoutContainer>
                <MyCalendarPageBlock>
                    <RootContainer>{RenderPageContent()}</RootContainer>
                </MyCalendarPageBlock>
            </IntializeLayoutContainer>
        </React.Fragment>
    );
};

export default MyCalendarPage;
