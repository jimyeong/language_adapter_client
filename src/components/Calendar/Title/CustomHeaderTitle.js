import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
import { useEffect } from 'react';
const CustomHeaderTitle = ({ titleProps, ...rest }) => {
    const {
        start: { marker, month, year, day },
        end,
    } = titleProps;
    const printDateInKorean = (date) => {
        return `${date.year}년 ${date.month}월`;
    };
    useEffect(() => {
        return () => {};
    }, []);

    const getFormattedTitle = () => {
        const ymd = {};
        const formatted = formatDate(marker, {
            month: 'numeric',
            year: 'numeric',
            day: 'numeric',
        }).split('/');
        ymd.year = formatted[2];
        ymd.month = formatted[0];
        ymd.day = formatted[1];
        // console.log(['ymd'], ymd);
        return printDateInKorean(ymd);
    };
    return <p className="customHeaderTitle">{getFormattedTitle()}</p>;
};

export default CustomHeaderTitle;
