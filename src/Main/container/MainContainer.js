import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '../../components/Calendar';
import LoadingSpinner from '../../components/LoadingSpinner';
import CurrentEventsContainer from '../../myCalendar/ui/container/CurrentEventsContainer';
import { useNavigate } from 'react-router-dom';
import { RootContainer } from '../../components/Containers';
import { BaseFloatingButton } from '../../components/FloatingButtons';
import { setSizeableIcon, PencilIcon } from '../../components/Icons';
import { GoogleLoginButton } from '../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { setExpressions } from '../../reducers/ExpressionSlice';
import { SelectedCalendarItemList } from '../../myCalendar/ui/view';
import { calendarUtils } from '../../components/Calendar/helper';
import { EventItem } from '../../myCalendar/ui/view';
import { ConfirmSlidingDialog } from '../../components/Dialogs';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiPencil } from 'react-icons/ti';

// BsPlusCircleFill
import { getRegisteredWords } from '../api';
import { AiOutlinePlus } from 'react-icons/ai';

import helper from '../../helper';
import { axiosApi } from '../../helper';
import MeaningCard from '../view/Meaning/MeaningCard';
const { get, post, privatePostAxios } = axiosApi;

const clientId =
    '1079878285444-g7ga6mkumcv5qmr6bil3tp8h3kqtnhf5.apps.googleusercontent.com';
const { findRenderList, splitDateFormatWithSpace } = calendarUtils;
const { dateBasicFormatter, setColor } = helper;
const MainContainerBlock = styled.div`
    .icon__wrapper {
        text-align: right;
        margin-bottom: 1rem;
    }
`;
const PlusIcon = styled(AiOutlinePlus)`
    font-size: 26px;
    font-weight: bold;
    fill: #111111;
    &:active {
        fill: ${setColor('#111111', 20)};
    }
`;
const getExpressions = (state) => {
    console.log(state);
    return state.expressions;
};
const MainContainer = ({ children, ...rest }) => {
    const navigate = useNavigate();
    let clikckedItem;
    const initialDeleteDialogState = { flag: false, id: -9999 };
    const [deleteDialogShow, setDeleteDialogShow] = useState(
        initialDeleteDialogState
    );
    const [error, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageState, setPageState] = useState({
        events: [],
        selectedDate: null,
    });
    const dispatch = useDispatch();
    const expressions = useSelector(getExpressions);
    const params = {
        user_id: 1,
        path: `/v1/words`,
        request_from: '/main',
    };
    const onClickFloatingButton = () => {
        navigate('/quiz');
    };
    const callApi = async () => {
        const url = `/v1/words`;
        setLoading(true);
        const errorCallback = (error) => {
            console.log(['error'], error);
            setErrors(error);
            setLoading(false);
        };
        const successCallback = (result) => {
            // dispatch(setExpressions(result.data));

            setPageState({
                ...pageState,
                events: processEventData(result.data),
            });
            setLoading(false);
        };
        privatePostAxios(url, {}, successCallback, errorCallback, {
            navigate,
            destination: { from: '/main', to: '' },
        });
    };
    const processEventData = (list) => {
        return list.map((item, index) => {
            const id = item.english_word_id;
            const title = item.english_word;
            const start = dateBasicFormatter(new Date(item.createdAt));
            const end = dateBasicFormatter(new Date(item.createdAt));
            const color = '#fde3ff';
            return { ...item, title, start, end, color, id };
        });
    };

    const onChangeSelectedDate = (selectedDate) =>
        setPageState({ ...pageState, selectedDate });

    useEffect(() => {
        console.log('메인페이지 마운트');
        callApi();
        return () => {
            console.log('메인페이지 언마운트');
        };
    }, []);

    const onClickAdd = () => {
        navigate('/add');
    };
    const onClickDeleteWord = (e) => {
        const deleteId = e.currentTarget.getAttribute('data-delno');
        setDeleteDialogShow({ flag: true, id: deleteId });
    };
    const deleteWordApiCall = (deleteId) => {
        console.log(['clikckedItem####'], deleteId);
        const url = `/v1/words/delete/${deleteId}`;
        const errorCallback = (error) => {
            console.log(['error'], error);
            setErrors(error);
        };
        const successCallback = (result) => {
            setPageState({
                ...pageState,
                events: pageState.events.filter(
                    (item) => item.english_word_id !== Number(deleteId)
                ),
            });
        };
        axiosApi.delete(url, successCallback, errorCallback);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div>에러가 발생하였습니다.</div>;
    // console.log(['events'], events);
    return (
        <RootContainer>
            <MainContainerBlock>
                <div className="icon__wrapper">
                    <PlusIcon onClick={onClickAdd} className="icon__size" />
                </div>
                <Calendar
                    onChangeSelectedDate={onChangeSelectedDate}
                    events={pageState.events}
                />
                <SelectedCalendarItemList>
                    {pageState.selectedDate &&
                        findRenderList(
                            pageState.events,
                            pageState.selectedDate.dateStr
                        ).map((itemIndex, index) => {
                            return (
                                <MeaningCard
                                    key={index}
                                    english_word={pageState.events[itemIndex]}
                                >
                                    <button
                                        onClick={onClickDeleteWord}
                                        className="btn btn-delete quiz__delete quiz__btn"
                                        data-delno={
                                            pageState.events[itemIndex].id
                                        }
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                    <button
                                        className="btn btn-edit quiz__edit quiz__btn"
                                        data-editno={
                                            pageState.events[itemIndex].id
                                        }
                                    >
                                        <BiEdit />
                                    </button>
                                </MeaningCard>
                            );
                        })}
                    {!pageState.selectedDate && (
                        <div className="current__message">
                            선택된 날짜가 없습니다
                        </div>
                    )}
                </SelectedCalendarItemList>
            </MainContainerBlock>
            <ConfirmSlidingDialog
                title="Confirmation"
                desc="are you sure you delete this"
                height={400}
                show={deleteDialogShow.flag}
                successCallback={() => {
                    deleteWordApiCall(deleteDialogShow.id);
                    setDeleteDialogShow(initialDeleteDialogState);
                }}
                cancelCallback={() => {
                    setDeleteDialogShow(initialDeleteDialogState);
                }}
            />

            <BaseFloatingButton
                icon={setSizeableIcon(<TiPencil fill="#fff" stroke="#fff" />)}
                onClickCallback={onClickFloatingButton}
                backgroundColor="#269887"
            />
        </RootContainer>
    );
};

export default MainContainer;
