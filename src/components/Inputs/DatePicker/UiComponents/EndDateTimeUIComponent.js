import React from 'react';
import helper from '../../../../helper';
const {
    dateKoreanFormatterInDay,
    dateKoreanFormatter,
    getCurrentTimeIntoAmPm,
} = helper;

const EndDateTimeUIComponent = React.forwardRef(
    ({ value, onClick, endDate }, ref) => {
        const dayInKorean = `(${dateKoreanFormatterInDay(endDate)})`;
        const formatedValue = dateKoreanFormatter(new Date(endDate));
        let time = getCurrentTimeIntoAmPm(endDate).replaceAll('PM', '오후');
        time = time.replaceAll('AM', '오전');
        return (
            <div className="textBoxDatePicker" onClick={onClick} ref={ref}>
                {formatedValue} {dayInKorean} {time}
            </div>
        );
    }
);

export default EndDateTimeUIComponent;
