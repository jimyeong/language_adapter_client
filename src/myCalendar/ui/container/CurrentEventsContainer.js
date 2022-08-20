import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import CurrentEventList from '../view/CurrentEventList';
import EventItem from '../view/EventItem';
import { calendarUtils } from '../../../components/Calendar/helper';
import { ConfirmSlidingDialog } from '../../../components/Dialogs';
const { pixelToRem, checkIfDateInRange, getIOSStringTime } = helper;
const { findRenderList, splitDateFormatWithSpace } = calendarUtils;

const CurrentEventsContainerBlock = styled.div`
    margin-top: ${pixelToRem(20)};
`;

const CurrentEventsContainer = ({
    onClickEventItem,
    selectedDate,
    englishWords,
    deleteExpression,
    cancelDeleteExpression,
    children,
    ...rest
}) => {
    const [managerState, setManangerState] = useState({});
    const deleteItem = (id) => {};
    useEffect(() => {
        return () => {};
    }, []);
    return (
        <CurrentEventsContainerBlock>
            {!selectedDate && (
                <div className="current__message">선택된 날짜가 없습니다</div>
            )}
            {selectedDate && (
                <div className="events__wrapper">
                    <CurrentEventList>
                        {findRenderList(englishWords, selectedDate.dateStr).map(
                            (index) => (
                                <EventItem
                                    englishWord={englishWords}
                                    index={index}
                                    key={index}
                                    confirmAlertCallback={deleteExpression}
                                    cancelAlertCallback={cancelDeleteExpression}
                                />
                            )
                        )}
                    </CurrentEventList>
                </div>
            )}

            <ConfirmSlidingDialog
                show={false}
                title="Confirmation"
                desc="Are you sure you delete this"
                height={300}
                successCallback={deleteItem}
                cancelCallback={() => {}}
            />
        </CurrentEventsContainerBlock>
    );
};

export default CurrentEventsContainer;
