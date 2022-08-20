import React from 'react';
import helper from '../../../../helper';
const { dateKoreanFormatterInDay, dateKoreanFormatter } = helper;

const StartDateUIComponent = React.forwardRef(
    ({ value, onClick, startDate }, ref) => {
        const dayInKorean = `(${dateKoreanFormatterInDay(startDate)})`;
        const formatedValue = dateKoreanFormatter(new Date(startDate));
        return (
            <div className="textBoxDatePicker" onClick={onClick} ref={ref}>
                {formatedValue} {dayInKorean}
            </div>
        );
    }
);

export default StartDateUIComponent;
