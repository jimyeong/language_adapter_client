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
    return (
        <QuizBlock>
            <div className="inner__wrapper">
                <div className="btn__area">
                    {renderHintButton(showHint)}
                    {renderAnswerButton(showAnswer)}
                    <button className="btn purple">사진보기</button>
                    <button className="btn orange">퀴즈수정</button>
                    <button className="btn green">정답처리</button>
                    <button className="btn red">오답처리</button>
                </div>
                <h3>{quiz.lang_origin}</h3>
                {showAnswer && <p className="quiz__txt">{quiz.lang_english}</p>}
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
