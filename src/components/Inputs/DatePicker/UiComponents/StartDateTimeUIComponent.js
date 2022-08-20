import React from 'react';
import helper from '../../../../helper';
const {
    dateKoreanFormatterInDay,
    dateKoreanFormatter,
    getCurrentTimeIntoAmPm,
} = helper;

const StartDateTimeUIComponent = React.forwardRef(
    ({ value, onClick, startDate }, ref) => {
        const dayInKorean = `(${dateKoreanFormatterInDay(startDate)})`;
        const formatedValue = dateKoreanFormatter(new Date(startDate));
        let time = getCurrentTimeIntoAmPm(startDate).replaceAll('PM', '오후');
        time = time.replaceAll('AM', '오전');
        return (
            <div className="textBoxDatePicker" onClick={onClick} ref={ref}>
                {formatedValue} {dayInKorean} {time}
            </div>
        );
    }
);

export default StartDateTimeUIComponent;
