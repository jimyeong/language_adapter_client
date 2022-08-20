import React from 'react';
import styled from 'styled-components';
import { FullSizeButton } from '../../../../../components/Buttons';
import { ApplicationLink } from '../..';

const UpdangEventDetailFooterBlock = styled.div``;
const UpdangEventDetailFooter = ({
    onClickGoToDetail,
    onClickButtonSave,
    children,
    ...rest
}) => {
    return (
        <UpdangEventDetailFooterBlock>
            <ApplicationLink
                content="상세페이지 보러가기"
                onClick={onClickGoToDetail}
            />
            <FullSizeButton onClick={onClickButtonSave}>저장</FullSizeButton>
        </UpdangEventDetailFooterBlock>
    );
};

export default UpdangEventDetailFooter;
