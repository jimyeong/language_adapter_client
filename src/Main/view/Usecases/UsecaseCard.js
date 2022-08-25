import React from 'react';
import styled from 'styled-components';
import PaddingAndMargins from '../../../helper/PaddingAndMargins';

const UsecaseCardBlock = styled.div`
    & + & {
        margin-top: ${PaddingAndMargins.basic.top}px;
    }
    padding: 8px 16px 16px;
    background-color: #fff;
    box-shadow: 1px -2px 10px 10px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
`;

function UsecaseCard({ children }) {
    return <UsecaseCardBlock>{children}</UsecaseCardBlock>;
}

export default UsecaseCard;
