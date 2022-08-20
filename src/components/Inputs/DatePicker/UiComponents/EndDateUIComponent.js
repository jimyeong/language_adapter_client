import React from 'react';
import helper from '../../../../helper';
const { dateKoreanFormatterInDay, dateKoreanFormatter } = helper;

const EndDateUIComponent = React.forwardRef(
    ({ value, onClick, endDate }, ref) => {
        const dayInKorean = `(${dateKoreanFormatterInDay(endDate)})`;
        const formatedValue = dateKoreanFormatter(new Date(endDate));
        return (
            <div className="textBoxDatePicker" onClick={onClick} ref={ref}>
                {formatedValue} {dayInKorean}
            </div>
        );
    }
);

export default EndDateUIComponent;
