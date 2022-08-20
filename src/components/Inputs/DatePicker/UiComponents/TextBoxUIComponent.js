import React from 'react';
import helper from '../../../../helper';

const { dateKoreanFormatterInDay, dateKoreanFormatter } = helper;
const TextBoxUIComponent = React.forwardRef(
    ({ value, onClick, selectedDay }, ref) => {
        const dayInKorean = `(${dateKoreanFormatterInDay(selectedDay)})`;
        const formatedValue = dateKoreanFormatter(new Date(selectedDay));
        return (
            <div className="textBoxDatePicker" onClick={onClick} ref={ref}>
                {formatedValue} {dayInKorean}
            </div>
        );
    }
);

export default TextBoxUIComponent;
