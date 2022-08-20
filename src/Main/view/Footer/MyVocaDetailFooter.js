import React from 'react';
import styled from 'styled-components';
import { FullSizeButton } from '../../../components/Buttons';

const MyVocaDetailFooterBlock = styled.div``;
const MyVocaDetailFooter = ({ onClickButtonSave, children, ...rest }) => {
    return (
        <MyVocaDetailFooterBlock>
            <FullSizeButton onClick={onClickButtonSave}>저장</FullSizeButton>
        </MyVocaDetailFooterBlock>
    );
};

export default MyVocaDetailFooter;
