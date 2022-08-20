import React from 'react';
import styled from 'styled-components';
import { FullSizeButton } from '../../../../../components/Buttons';

const MyEventDetailFooterBlock = styled.div``;
const MyEventDetailFooter = ({ onClickButtonSave, children, ...rest }) => {
    return (
        <MyEventDetailFooterBlock>
            <FullSizeButton onClick={onClickButtonSave}>저장</FullSizeButton>
        </MyEventDetailFooterBlock>
    );
};

export default MyEventDetailFooter;
