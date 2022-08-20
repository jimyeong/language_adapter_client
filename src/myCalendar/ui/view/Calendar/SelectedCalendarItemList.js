import React from 'react';
import styled from 'styled-components';

const SelectedCalendarItemListBlock = styled.div``;

function SelectedCalendarItemList({ children }) {
    return (
        <SelectedCalendarItemListBlock>
            {children}
        </SelectedCalendarItemListBlock>
    );
}

export default SelectedCalendarItemList;
