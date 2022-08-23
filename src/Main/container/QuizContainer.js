import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';

import { RootContainer } from '../../components/Containers';
import { getQuizApi } from '../api';
import { Quiz } from '../../components/Quiz';
import { useNavigate } from 'react-router-dom';
import { BaseFloatingButton } from '../../components/FloatingButtons';
import { setSizeableIcon, CalandarIcon } from '../../components/Icons';

import helper, { axiosApi } from '../../helper';
const { setColor } = helper;
const { privatePostAxios, privateGetAxios } = axiosApi;

const server = 'http://localhost:5000';
const QuizContainerBlock = styled.div`
    .btn + .btn {
        margin-left: 4px;
    }
    .btn {
        color: #000013;
        cursor: pointer;
        border: none;
        border-radius: 7px;
        width: 80px;
        height: 36px;
        line-height: 36px;
        &.red {
            background-color: #ff4444;
            background-color: #8513bf;
            &:hover {
                // background-color: #fa7070;
                background-color: ${setColor('#8513bf', 10)};
            }
        }
        &.yellow {
            background-color: #ffcb1e;
            &:hover {
                background-color: #ffdd6e;
            }
        }
        &.orange {
            background-color: #ff872f;
            &:hover {
                background-color: ${setColor('#ff872f', 20)};
            }
        }
        &.green {
            background-color: #15d072;
            &:hover {
                background-color: ${setColor('#15d072', 20)};
            }
        }
        &.blue {
            background-color: #13a4d9;
            &:hover {
                background-color: ${setColor('#13a4d9', 20)};
            }
        }

        &.purple {
            background-color: #f6c0ff;
            &:hover {
                background-color: ${setColor('#f6c0ff', 20)};
            }
        }
    }
    .btn {
    }
`;
const QuizContainer = ({ children, ...rest }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [containerState, setContainerState] = useState({
        quizes: [],
    });

    const onClickFloatingButton = () => {
        navigate('/main');
    };
    const callApi = () => {
        setLoading(true);
        const requestURL = `/v1/quiz`;
        const params = {};
        const successCallback = (res) => {
            const pred = 1209600000 + 86400000;
            const today = new Date().getTime();
            let recent_arr = [];

            // 2주치 데이터만 추려서 퀴즈로 보여준다.
            const getRecentsData = (arr) => {
                arr.map((item) => {
                    const created_at = new Date(item.created_at).getTime();
                    console.log('today: ', today);
                    console.log('created_at: ', created_at);
                    if (today - created_at <= pred) {
                        recent_arr.push(item);
                    }
                });
                return recent_arr;
            };
            setContainerState({
                ...containerState,
                quizes: res.data,
            });
            setLoading(false);
        };
        const errorCallback = (err) => {
            setLoading(false);
            setError(err);
        };

        // getQuizApi(requestURL, params, successCallback, errorCallback);
        privatePostAxios(requestURL, {}, successCallback, errorCallback, {
            navigate,
            destination: { from: '/quizContainer', to: '' },
        });
    };
    useEffect(() => {
        callApi();
    }, []);
    return (
        <RootContainer>
            <QuizContainerBlock>
                {containerState.quizes.map((item, key) => {
                    return <Quiz key={key} quiz={item} />;
                })}
            </QuizContainerBlock>
            {loading && <LoadingSpinner />}

            <BaseFloatingButton
                onClickCallback={onClickFloatingButton}
                backgroundColor="#269887"
                icon={setSizeableIcon(
                    <CalandarIcon fill="#269887" stroke="#fff" />
                )}
            />
        </RootContainer>
    );
};

export default QuizContainer;
