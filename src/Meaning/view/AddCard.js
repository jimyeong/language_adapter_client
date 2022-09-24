import React from 'react';
import styled from 'styled-components';

import { BaseLayoutConfig } from '../../components/globalUIconfig';

const AddCard = styled.div`
    & + & {
        margin-top: 1rem;
    }
    border-radius: 8px;
    padding: ${(props) => `${BaseLayoutConfig.mobileSidePadding}px`};
    padding-bottom: ${(props) =>
        ` ${2 * BaseLayoutConfig.mobileSidePadding}px`};
    background-color: #f1fff9;
`;
export default React.memo(AddCard);
