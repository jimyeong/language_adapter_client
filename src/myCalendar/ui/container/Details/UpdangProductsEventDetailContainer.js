import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UpdangProductsEventDetail } from '../../view';
import { useLocation, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../../../helper/authentication';
import helper, { axiosApi, nativeUtils } from '../../../../helper';
import { useInputs } from '../../../../hooks';
import { BaseLayoutConfig } from '../../../../globalUIconfig';
import {
  ConfirmSlidingDialog,
  AlertDialog,
} from '../../../../components/Dialogs';
import { routes } from '../../../routes';
import { detailSaveApi } from '../../../api';
import { SmallLoadingSpinner } from '../../../../components/LoadingSpinner';
import { utils } from '../../../service';

const { setDialogForSpecificTimes } = utils;
const { get, post } = axiosApi;
const { dateBasicFormatter } = helper;
const { backButtonSpace } = BaseLayoutConfig.header;
const UpdangProductsEventDetailContainerBlock = styled.div``;

const UpdangProductsEventDetailContainer = ({ children, ...rest }) => {
  let location = useLocation();
  let navigate = useNavigate();
  const { state } = location;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // alert flag
  const [showLeaveMessage, setShowLeaveMessage] = useState(false);
  const [showPushMessage, setShowPushMessage] = useState(false);

  // 날짜 수정 안됨

  /* const [startDay, setStartDay] = useState(new Date(state.infoStartDt));
  const [endDay, setEndDay] = useState(new Date());
  const [annoucementDay, setAnnoucementDay] = useState(new Date());
   */

  console.log(['state@@@@!@#!@#'], state);
  const calendarSchedule = {
    startDay: state.infoStartDt,
    endDay: state.infoEndDt,
    annoucementDay: state.infoAnnounceDt,
  };

  // 푸시알림 스위치
  const switchCurrentStatus = state.infoAlarm === 'Y' ? '1' : '0';
  const [switchStatus, setSwitchStatus] = useState(switchCurrentStatus);

  // 스크랩 레벨설정
  const [scrapLevel, setScrapLevel] = useState(state.infoScrapLevel);

  // 현재 선택된 색상
  // console.log(['state.infoColor'], state.infoColor);
  const [currentColor, setCurrentColor] = useState(state.infoColor);

  // 메모
  const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
    personalMemo: '',
  });

  // 삭제기능 사용할떄 나타나는 AlertDialog 플래그
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  // 삭제 API, 중복으로 사용 가능하면 꺼내기 나중에
  const deleteApiCall = async () => {
    const currentPath = location.pathname;
    const successMessage = '스크랩취소되었습니다.';
    const failMessage = '실패하였습니다.';
    const nextRouteUrl = `${routes.home}`;
    const url = '/updang/api/calendar/own/delete';
    const { infoNo, infoType } = state;
    const requestBody = { infoType, infoNo };

    const successCallback = (response) => {
      setLoading(false);
      const { data } = response;
      if (data.state == 200) {
        const nativeFlag = nativeUtils.sendMessage({
          action: 'gotoMyCalendar',
          params: {
            prevPath: currentPath,
            message: successMessage,
            flag: 1,
          },
        });
        if (!nativeFlag)
          navigate(nextRouteUrl, {
            state: {
              prevPath: currentPath,
              message: successMessage,
              flag: 1,
            },
          });
      }
      if (data.state !== 200) {
        const nativeFlag = nativeUtils.sendMessage({
          action: 'gotoMyCalendar',
          params: {
            prevPath: currentPath,
            message: failMessage,
            flag: -1,
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
      }
    };

    const errorCallback = (error) => {
      setLoading(false);
      const nativeFlag = nativeUtils.sendMessage({
        action: 'gotoMyCalendar',
        params: {
          prevPath: currentPath,
          message: failMessage,
          flag: -1,
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
    };

    post(url, requestBody).then(successCallback).catch(errorCallback);
  };
  // 휴지통아이콘 클릭시,등장하는 dialog 확인버튼 클릭시 작동하는 Callback 함수
  const deleteSuccessCallback = () => {
    setShowDeleteAlert(false);
    deleteApiCall(state);
  };
  // 휴지통아이콘 클릭시,등장하는 dialog 취소버튼 클릭시 작동하는 Callback 함수
  const deleteCancelCallback = () => setShowDeleteAlert(false);

  const onClickDelete = () => setShowDeleteAlert(true); // 삭제버튼 클릭시, 스크랩된 거 제거

  // 저장API
  const onSaveAPIcall = (requestBody) => {
    const url = `/updang/api/calendar/own/change`;
    const currentPath = location.pathname;
    const successMessage = '저장되었습니다.';
    const failMessage = '실패하였습니다.';
    const nextRouteUrl = `${routes.home}`;
    const successCallback = (response) => {
      setLoading(false);
      const { data } = response;

      if (data.state == 200) {
        const nativeFlag = nativeUtils.sendMessage({
          action: 'gotoMyCalendar',
          params: {
            prevPath: currentPath,
            message: successMessage,
            flag: 1,
          },
        });
        if (!nativeFlag)
          navigate(nextRouteUrl, {
            state: {
              prevPath: currentPath,
              message: successMessage,
              flag: 1,
            },
          });
      }
      if (data.state !== 200) {
        const nativeFlag = nativeUtils.sendMessage({
          action: 'gotoMyCalendar',
          params: {
            prevPath: currentPath,
            message: failMessage,
            flag: -1,
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
      }
    };

    const errorCallback = (error) => {
      setLoading(false);
      const nativeFlag = nativeUtils.sendMessage({
        action: 'gotoMyCalendar',
        params: {
          prevPath: currentPath,
          message: failMessage,
          flag: -1,
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
    event.infoState = '';

    event.infoNo = state.infoNo;
    event.infoState = state.infoState;
    event.infoSubject = state.infoSubject.trim();
    event.infoStartDt = calendarSchedule.startDay;
    event.infoEndDt = calendarSchedule.endDay;
    event.infoAnnounceDt = calendarSchedule.annoucementDay;
    event.infoType = state.infoType;
    event.infoColor = currentColor.substring(1);
    event.infoMemo = _inputValues.personalMemo.trim();
    event.infoAlarm = switchStatus == '1' ? 'Y' : 'N';
    event.infoScrapLevel = scrapLevel;
    return event;
  };

  const checkValidate = (item) => {
    let validFlag = true;
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

  useEffect(() => {
    if (!isAuthenticated()) navigate(-1); // 비회원인경우, 접근 못하게 막는다.
    !state && navigate(-1); // state 에 데이터가 들어있음 없으면 비정상 접근
    return () => {};
  }, [state]);

  const onClickGoToDetail = () => setShowLeaveMessage(true); // 상세보러가기 버튼 클릭
  const bottomButtonFooterSize = 82; // 하단에 버튼공간 크기
  const backbuttonTopPaddingSize = backButtonSpace[0]; // 상단에, 뒤로가기버튼 공간 크기
  const detailPageURL = `/product/scholarship/summary/${state.infoType}/${state.infoCno}`; // 상세페이지 클릭시 보낼링크

  // push 알람 설정시
  const onChangePushSwitch = (status) => {
    if (status == '1') {
      setDialogForSpecificTimes(status, setShowPushMessage); // push알림을 올리고 2초뒤에 알람을 제거한다.
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
    <UpdangProductsEventDetailContainerBlock>
      <UpdangProductsEventDetail
        title={state.title}
        onClickDelete={onClickDelete}
        pushSwitchStatus={switchStatus}
        onChangePushSwitch={onChangePushSwitch}
        scrapLevel={scrapLevel}
        onChangeScrapLevel={(level) => setScrapLevel(level)}
        selectedColor={currentColor}
        onChangeColorPicker={(selectedColour) =>
          setCurrentColor(selectedColour)
        }
        emptySpaceHeightFromBottom={
          bottomButtonFooterSize + backbuttonTopPaddingSize
        }
        memoTargetName="personalMemo"
        memoTargetValue={_inputValues.personalMemo}
        onChangeMemo={onChangeInputs}
        startDay={calendarSchedule.startDay}
        endDay={calendarSchedule.endDay}
        annoucementDay={calendarSchedule.annoucementDay}
        onClickButtonSave={onClickButtonSave}
        onClickGoToDetail={onClickGoToDetail}
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
      <ConfirmSlidingDialog
        show={showLeaveMessage}
        title={null}
        desc="클릭시 내용이 저장되지 않습니다."
        successCallback={() => {
          setShowLeaveMessage(false);
          //navigate(detailPageURL);
          nativeUtils.navigateToNewWebView(navigate, detailPageURL);
        }}
        cancelCallback={() => setShowLeaveMessage(false)}
        height={200}
      />
      <AlertDialog
        show={showPushMessage}
        message="종료일 전인 오후 6시에 알려드려요!"
      />
      {loading && <SmallLoadingSpinner />}
    </UpdangProductsEventDetailContainerBlock>
  );
};

export default UpdangProductsEventDetailContainer;
