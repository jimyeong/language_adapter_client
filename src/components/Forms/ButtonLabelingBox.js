import React from 'react';
import styled from 'styled-components';
import LabelingBox from './LabelingBox';

const IconLabelingBoxBlock = styled.div``;

function ButtonLabelingBox({ children, labelingName, uiType }) {
    return (
        <LabelingBox labelingName={labelingName} uiType={uiType}>
            {children}
        </LabelingBox>
    );
}

export default ButtonLabelingBox;
