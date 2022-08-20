import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MyEventDetail } from '../../view';
import { useLocation, useNavigate } from 'react-router-dom';
import helper, { axiosApi } from '../../../../helper';
import useInputs from '../../../../helper/useInputs';
import { BaseLayoutConfig } from '../../../../components/globalUIconfig';
import {
    ConfirmSlidingDialog,
    AlertDialog,
} from '../../../../components/Dialogs';
import { routes } from '../../../routes';
import { detailSaveApi } from '../../../api';
import { utils } from '../../../service';
import LoadingSpinner from '../../../../components/LoadingSpinner';

const { get, post } = axiosApi;
const { dateBasicFormatter, dateFormatter } = helper;
const { setDialogForSpecificTimes } = utils;

const { backButtonSpace } = BaseLayoutConfig.header;
const DayInMS = 86400000;
const bottomButtonFooterSize = 46;
const backbuttonTopPaddingSize = backButtonSpace[0];
const MyEventsDetailAddContainerBlock = styled.div``;

const MyEventsDetailAddContainer = ({ children, ...rest }) => {
    let location = useLocation();
    let navigate = useNavigate();
    const { state } = location;

    // alert flag
    const [showLeaveMessage, setShowLeaveMessage] = useState(false);
    const [showPushMessage, setShowPushMessage] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const today = new Date().getTime();
    const calendarSchedule = {
        startDay: new Date(today), // 시작날짜 초기값 오늘
        endDay: new Date(today + DayInMS), // 종료날짜 초기값 내일
    };
    const [startDay, setStartDay] = useState(calendarSchedule.startDay); // 시작일 설정
    const [endDay, setEndDay] = useState(calendarSchedule.endDay); // 종료일
    const [switchStatus, setSwitchStatus] = useState('0'); // 푸시알림 스위치
    const [currentColor, setCurrentColor] = useState('#C3D2FB'); // 현재 선택된 색상
    const [isAllDay, setIsAllDay] = useState('0'); // 종일설정

    // validations
    const [validateFlags, setValidateFlags] = useState({
        eventTitle: false,
    });

    // 메모
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        personalMemo: '',
        eventTitle: '',
    });

    // 삭제기능
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    // 삭제 API, 중복으로 사용 가능하면 꺼내기 나중에
    const deleteApiCall = async () => {
        const currentPath = location.pathname;
        const successMessage = '정상처리 되었습니다';
        const nextRouteUrl = `${routes.home}`;
        /* 
        const nativeFlag = nativeUtils.sendMessage({
            action: 'gotoMyCalendar',
            params: {
                prevPath: currentPath,
                message: successMessage,
                flag: 1,
                link: nextRouteUrl,
            },
        });
        if (!nativeFlag) navigate(-1);
         */
    };

    // 휴지통아이콘 클릭시,등장하는 dialog 확인버튼 클릭시
    const deleteSuccessCallback = () => {
        setShowDeleteAlert(false);
        deleteApiCall(state);
    };

    // 휴지통아이콘 클릭시,등장하는 dialog 확인버튼 클릭시
    const deleteCancelCallback = () => setShowDeleteAlert(false);

    const onClickDelete = () => setShowDeleteAlert(true); // 삭제버튼 클릭시, 스크랩된 거 제거

    /* 저장기능 */
    // 저장API
    const onSaveAPIcall = (requestBody) => {
        const url = '/updang/api/calendar/own/add';
        const currentPath = location.pathname;
        const successMessage = '저장되었습니다.';
        const failMessage = '실패하였습니다.';
        const nextRouteUrl = `${routes.home}`;
        const successCallback = (response) => {
            setLoading(false);
            const { data } = response;
            if (data.state == 200) {
                /* 
                const nativeFlag = nativeUtils.sendMessage({
                    action: 'gotoMyCalendar',
                    params: {
                        prevPath: currentPath,
                        message: successMessage,
                        flag: 1,
                        link: nextRouteUrl,
                    },
                });
                 */
                /* 
                if (!nativeFlag)
                    navigate(nextRouteUrl, {
                        state: {
                            prevPath: currentPath,
                            message: successMessage,
                            flag: 1,
                        },
                    });
                     */
            }
            if (data.state !== 200) {
                /* const nativeFlag = nativeUtils.sendMessage({
                    action: 'gotoMyCalendar',
                    params: {
                        prevPath: currentPath,
                        message: failMessage,
                        flag: -1,
                        link: nextRouteUrl,
                    },
                });
                if (!nativeFlag)
                    navigate(nextRouteUrl, {
                        state: {
                            prevPath: currentPath,
                            message: failMessage,
                            flag: -1,
                        },
                    });
                     */
            }
        };

        const errorCallback = (error) => {
            setLoading(false);

            /* const nativeFlag = nativeUtils.sendMessage({
                action: 'gotoMyCalendar',
                params: {
                    prevPath: currentPath,
                    message: failMessage,
                    flag: -1,
                    link: nextRouteUrl,
                },
            });
            if (nativeFlag)
                navigate(nextRouteUrl, {
                    state: {
                        prevPath: currentPath,
                        message: failMessage,
                        flag: -1,
                    },
                });
                 */
        };

        setLoading(true);
        detailSaveApi(
            url,
            requestBody,
            currentPath,
            successCallback,
            errorCallback
        );
    };

    // 데이터 취합
    const getSelectedDataByUser = () => {
        // item 을 모아서 걍 데이터로 만들어줘
        const event = {};
        // initializing
        event.infoSubject = '';
        event.infoStartDt = '';
        event.infoEndDt = '';
        event.infoType = '';
        event.infoColor = '';
        event.infoMemo = '';
        event.infoAlarm = '';
        event.infoScrapLevel = '';
        event.infoAlways = '';

        event.infoSubject = _inputValues.eventTitle.trim();
        event.infoStartDt =
            isAllDay == '1'
                ? dateFormatter(startDay, 'yyyy-LL-dd')
                : dateFormatter(startDay, 'yyyy-LL-dd hh:mm:ss');
        event.infoEndDt =
            isAllDay == '1'
                ? dateFormatter(endDay, 'yyyy-LL-dd')
                : dateFormatter(endDay, 'yyyy-LL-dd hh:mm:ss');
        event.infoType = 'MINE';
        event.infoColor = currentColor.substring(1);
        event.infoMemo = _inputValues.personalMemo.trim();
        event.infoAlarm = switchStatus == '1' ? 'Y' : 'N';
        event.infoScrapLevel = '0';
        event.infoAlways = isAllDay == '1' ? 'Y' : 'N';
        return event;
    };

    const checkValidate = (item) => {
        let validFlag = true;
        let eventTitle = false;
        if (item.infoSubject == '') {
            validFlag = false;
            eventTitle = true;
        }
        setValidateFlags({ ...validateFlags, eventTitle });
        return validFlag;
    };

    const onClickButtonSave = () => {
        const item = getSelectedDataByUser();
        if (checkValidate(item)) {
            // api  호출
            console.log(' @@@@@@@@@@@ VALID');
            onSaveAPIcall(item);
        }
        if (!checkValidate(item)) {
            // 알림 메시지 띄우기
            console.log(' @@@@@@@@@@@ NOT VALID');
            return {}; // 시스템 메시지 // redux로 핸들링한다.
        }
    };
    // push 알람 설정시
    const onChangePushSwitch = (status) => {
        if (status == '1') {
            setDialogForSpecificTimes(status, setShowPushMessage);
        }
        setSwitchStatus(status);
    };
    // 뒤로가기
    const [showBackAlert, setShowBackAlert] = useState(false);
    const onClickBackButton = () => setShowBackAlert(true);
    const onClickBackSuccessCallback = () => {
        navigate(-1);
    };
    const onClickBackCancelCallback = () => setShowBackAlert(false);
    return (
        <MyEventsDetailAddContainerBlock>
            <MyEventDetail
                eventTitle={_inputValues.eventTitle}
                eventTitleName="eventTitle"
                onChangeEventTitle={onChangeInputs}
                startDay={startDay}
                onStartDayChange={(date) => setStartDay(date)}
                endDay={endDay}
                onEndDayChange={(date) => setEndDay(date)}
                selectedColor={currentColor}
                onChangeColorPicker={(selectedColor) =>
                    setCurrentColor(selectedColor)
                }
                emptySpaceHeightFromBottom={
                    bottomButtonFooterSize + backbuttonTopPaddingSize
                }
                isAllDay={isAllDay}
                onChangeAllDay={(status) => {
                    console.log(['status'], status);
                    setIsAllDay(status);
                }}
                onChangePushSwitch={onChangePushSwitch}
                pushSwitchStatus={switchStatus}
                memoTargetName="personalMemo"
                memoTargetValue={_inputValues.personalMemo}
                onChangeMemo={onChangeInputs}
                onClickButtonSave={onClickButtonSave}
                onClickDelete={onClickDelete}
                validateMessage="필수 항목입니다."
                validateMessageShow={validateFlags.eventTitle}
                onClickBackButton={onClickBackButton}
            />
            <ConfirmSlidingDialog
                show={showDeleteAlert}
                title="일정삭제"
                desc="이 일정을 삭제하시겠습니까?"
                successCallback={deleteSuccessCallback}
                cancelCallback={deleteCancelCallback}
                height={200}
            />
            <ConfirmSlidingDialog
                show={showBackAlert}
                title="뒤로가기"
                desc="뒤로가기 시 수정한 내용이 저장되지 않습니다.  뒤로가시겠습니까?"
                successCallback={onClickBackSuccessCallback}
                cancelCallback={onClickBackCancelCallback}
                height={200}
            />
            <AlertDialog
                show={showPushMessage}
                message="종료일 전인 오후 6시에 알려드려요!"
            />
            {loading && <LoadingSpinner />}
        </MyEventsDetailAddContainerBlock>
    );
};

export default MyEventsDetailAddContainer;
