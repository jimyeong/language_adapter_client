import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import useInputs from '../../../helper/useInputs';
import { addVocaApi } from '../../api';
import LoadingSpinner from '../../../components/LoadingSpinner';
import helper from '../../../helper';
import { utils } from '../../service';
import MyVocaDetail from '../../view/MyVocaDetail';
import { AlertDialog, ConfirmSlidingDialog } from '../../../components/Dialogs';

const { _compareDate, dateFormatter } = helper;
const { setDialogForSpecificTimes } = utils;

const DayInMS = 86400000;
const AddVocaContainerBlock = styled.div``;
const AddVocaContainer = ({ children, ...rest }) => {
    let location = useLocation();
    let navigate = useNavigate();
    const { state } = location;

    // alert flag
    const [showLeaveMessage, setShowLeaveMessage] = useState(false);
    const [showPushMessage, setShowPushMessage] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [switchStatus, setSwitchStatus] = useState('0'); // 푸시알림 스위치
    const [currentColor, setCurrentColor] = useState('#C3D2FB'); // 현재 선택된 색상

    // validations
    const [validateFlags, setValidateFlags] = useState({
        vocaTitle: false,
    });

    // 메모
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        personalMemo: '',
        vocaTitle: '',
    });
    // 삭제기능
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    // 삭제 API, 중복으로 사용 가능하면 꺼내기 나중에
    const deleteApiCall = async () => {
        navigate(-1);
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
        const url = 'http://localhost:5000/v1/words/add';
        const currentPath = location.pathname;
        const successMessage = '저장되었습니다.';
        const failMessage = '실패하였습니다.';
        const nextRouteUrl = `/`;
        const successCallback = (response) => {
            setLoading(false);
            const { data } = response;
            if (data.state == 200)
                navigate(nextRouteUrl, {
                    state: {
                        prevPath: currentPath,
                        message: successMessage,
                        flag: 1,
                    },
                });
            if (data.state !== 200)
                navigate(nextRouteUrl, {
                    state: {
                        prevPath: currentPath,
                        message: failMessage,
                        flag: -1,
                    },
                });
        };

        const errorCallback = (error) => {
            setLoading(false);
            navigate(nextRouteUrl, {
                state: {
                    prevPath: currentPath,
                    message: failMessage,
                    flag: -1,
                },
            });
        };

        setLoading(true);
        addVocaApi(
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
        /* 
        id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                origin_expression: {
                    type: Sequelize.STRING(200),
                },
                converted_expression: {
                    type: Sequelize.STRING(200),
                },
                usage: {
                    type: Sequelize.TEXT,
                },
                hint: {
                    type: Sequelize.STRING(100),
                },
        */
        event.origin_expression = '';
        event.converted_expression = '';

        event.origin_expression = _inputValues.vocaTitle.trim();
        event.converted_expression = _inputValues.personalMemo.trim();
        event.created_at = dateFormatter(new Date(), 'yyyy-LL-dd HH:mm:ss');
        event.usage = '';
        event.hint = '';
        // event.infoAlways = isAllDay == '1' ? 'Y' : 'N';
        return event;
    };

    const checkValidate = (item) => {
        let validFlag = true;
        let vocaTitle = false;
        if (item.origin_expression == '') {
            validFlag = false;
            vocaTitle = true;
        }
        if (item.converted_expression == '') {
            validFlag = false;
            vocaTitle = true;
        }
        setValidateFlags({ ...validateFlags, vocaTitle });
        return validFlag;
    };

    const onClickButtonSave = () => {
        const item = getSelectedDataByUser();
        console.log(item);
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
        <AddVocaContainerBlock>
            <MyVocaDetail
                eventTitle={_inputValues.vocaTitle}
                eventTitleName="vocaTitle"
                onChangeEventTitle={onChangeInputs}
                selectedColor={currentColor}
                onChangeColorPicker={(selectedColor) =>
                    setCurrentColor(selectedColor)
                }
                emptySpaceHeightFromBottom={30}
                memoTargetName="personalMemo"
                memoTargetValue={_inputValues.personalMemo}
                onChangeMemo={onChangeInputs}
                onClickButtonSave={onClickButtonSave}
                onClickDelete={onClickDelete}
                validateMessage="필수 항목입니다."
                validateMessageShow={validateFlags.vocaTitle}
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
        </AddVocaContainerBlock>
    );
};

export default AddVocaContainer;
