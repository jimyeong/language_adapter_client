import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RoundChip, RandomColorBorderRoundChip } from '../Chips';

const QuizBlock = styled.div`
    & + & {
        margin-top: 1rem;
    }
    border: 2px solid #000013;
    position: relative;
    background-color: #f1f1f1;
    padding: 1rem;
    padding-bottom: 2rem;
    border-radius: 12px;
    .quiz__txt {
        font-weight: 300;
    }
    .hint__area {
        padding-top: 16px;
    }
`;
const Quiz = ({ quiz, ...rest }) => {
    const [showHint, setShowHint] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [description, setDescription] = useState(false);
    const renderAnswerButton = (showFlag) => {
        if (showFlag)
            return (
                <button
                    className="btn yellow"
                    onClick={() => setShowAnswer(false)}
                >
                    정답숨김
                </button>
            );
        return (
            <button className="btn yellow" onClick={() => setShowAnswer(true)}>
                정답확인
            </button>
        );
    };

    const renderHintButton = (showFlag) => {
        if (showFlag)
            return (
                <button className="btn blue" onClick={() => setShowHint(false)}>
                    힌트숨김
                </button>
            );
        return (
            <button className="btn blue" onClick={() => setShowHint(true)}>
                힌트확인
            </button>
        );
    };

    const renderHintStepFirstButton = (showFlag) => {
        if (showFlag) {
            return (
                <button
                    onClick={() => {
                        setDescription(false);
                    }}
                    className="btn purple"
                >
                    글자힌트 숨김
                </button>
            );
        }
        if (!showFlag) {
            return (
                <button
                    onClick={() => {
                        setDescription(true);
                    }}
                    className="btn purple"
                >
                    글자힌트 보기
                </button>
            );
        }
    };
    return (
        <QuizBlock>
            <div className="inner__wrapper">
                <div className="btn__area">
                    {renderHintButton(showHint)}
                    {renderAnswerButton(showAnswer)}
                    {renderHintStepFirstButton(description)}
                    <button className="btn orange">퀴즈수정</button>
                    <button className="btn green">정답처리</button>
                    <button className="btn red">오답처리</button>
                </div>
                <br />
                <h3>{description && quiz.lang_origin}</h3>
                <br />
                {showAnswer && <p className="quiz__txt">{quiz.lang_english}</p>}
                <br />
                {quiz.image_url ? (
                    <div>
                        <img src={quiz.image_url} alt="" />
                    </div>
                ) : (
                    <div>
                        <span>image not registered</span>
                    </div>
                )}
                <br />
                {showHint && (
                    <div className="hint__area">
                        <RandomColorBorderRoundChip text={quiz.key_phrase} />
                    </div>
                )}
            </div>
        </QuizBlock>
    );
};

export default Quiz;
