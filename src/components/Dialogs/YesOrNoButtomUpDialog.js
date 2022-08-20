import React from 'react';
import BottomUpDialogFrame from './BottomUpDialogFrame';
import styled from 'styled-components';
import { ButtonHorizontalContainer } from '../LayoutContainer';
import { FullSizeButton } from '../Buttons';
import { useDispatch } from 'react-redux';
import helper from '../../helper';
/// @@deprecated -> use SlidingButtonUpDialogue
const { pixelToRem } = helper;
const YesOrNoBottomUpDialogBlock = styled.div`
    padding: 0 ${pixelToRem(38)};
    .dialog__title {
        margin-top: ${pixelToRem(25)};
        font-size: ${pixelToRem(20)};
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
        color: #000;
    }
    .dialog__desc {
        margin-top: ${pixelToRem(14)};
        font-size: ${pixelToRem(16)};
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        color: #707070;
    }
`;

const YesOrNoBottomUpDialog = ({
    title,
    desc,
    successCallback,
    cancelCallback,
    height = 214,
    children,

    ...rest
}) => {
    const dispatch = useDispatch();
    const onSuccess = () => {
        if (successCallback) successCallback();
        return dispatch({ type: 'system/setDialog', payload: false });
    };
    const onCancel = () => {
        if (cancelCallback) cancelCallback();
        return dispatch({ type: 'system/setDialog', payload: false });
    };
    return (
        <BottomUpDialogFrame height={height}>
            <YesOrNoBottomUpDialogBlock>
                <div className="title__area">
                    <h3 className="dialog__title">{title}</h3>
                    <p className="dialog__desc">{desc}</p>
                </div>
                <ButtonHorizontalContainer
                    marginTop={12}
                    columnNumber={2}
                    paddingSize={10}
                >
                    <FullSizeButton
                        backgroundColor="#A3A2A2"
                        onClick={onSuccess}
                    >
                        확인
                    </FullSizeButton>
                    <FullSizeButton
                        backgroundColor="#A3A2A2"
                        onClick={onCancel}
                    >
                        취소
                    </FullSizeButton>
                </ButtonHorizontalContainer>
            </YesOrNoBottomUpDialogBlock>
        </BottomUpDialogFrame>
    );
};

export default YesOrNoBottomUpDialog;
