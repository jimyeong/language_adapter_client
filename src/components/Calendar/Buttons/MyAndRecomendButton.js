import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const MyAndRecomendButtonBlock = styled.div`
    text-align: center;
    padding-top: 20px;
    .btn {
        font-size: 12px;
        color: #707070;
        display: inline-block;
        width: 40%;
        height: 24px;
        line-height: 22px;
        background-color: #f1f1f1;
        border: 1px solid #bbb;
        border-radius: 6px;
        & + .btn {
            margin-left: 12px;
        }
        &.is-active {
            background-color: #9579c9;
            border-color: #9579c9;
            color: white;
        }
    }
`;

// onClick 시 { calendarType: 1, calendarName: 'my' }
const MyAndRecomendButton = ({
    selected = 2,
    onClickCalendarChange,
    onClickMyCalendar,
    children,

    ...rest
}) => {
    const onButtonClick = (selectedCalendar) => {
        onClickCalendarChange(selectedCalendar);
    };
    const renderButton = (selected) => {
        const type = parseInt(selected);
        return (
            <React.Fragment>
                <button
                    onClick={() =>
                        onButtonClick({ calendarType: 1, calendarName: 'my' })
                    }
                    className={cn('btn', type === 1 && 'is-active')}
                >
                    My
                </button>
                <button
                    onClick={() =>
                        onButtonClick({
                            calendarType: 2,
                            calendarName: 'recommend',
                        })
                    }
                    className={cn('btn', type === 2 && 'is-active')}
                >
                    추천
                </button>
            </React.Fragment>
        );
    };
    return (
        <MyAndRecomendButtonBlock>
            {renderButton(selected)}
        </MyAndRecomendButtonBlock>
    );
};

export default MyAndRecomendButton;
