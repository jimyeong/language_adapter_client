import React from 'react';
import BottomUpDialogFrame from './BottomUpDialogFrame';
import styled from 'styled-components';
import { ButtonHorizontalContainer } from '../LayoutContainer';
import { FullSizeButton } from '../Buttons';
import { useDispatch } from 'react-redux';
import helper from '../../helper';

const { pixelToRem } = helper;
const CloseBottomUpDialogBlock = styled.div`
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

const CloseBottomUpDialog = ({
    title,
    desc,
    closeCallback,
    height = 214,
    children,

    ...rest
}) => {
    const dispatch = useDispatch();

    const onClose = () => {
        if (closeCallback) closeCallback();
        return dispatch({ type: 'system/setDialog', payload: false });
    };
    return (
        <BottomUpDialogFrame height={height}>
            <CloseBottomUpDialogBlock>
                <div className="title__area">
                    <h3 className="dialog__title">{title}</h3>
                    <p
                        className="dialog__desc"
                        dangerouslySetInnerHTML={{ __html: desc }}
                    ></p>
                </div>
                <ButtonHorizontalContainer
                    marginTop={12}
                    columnNumber={1}
                    paddingSize={10}
                >
                    <FullSizeButton backgroundColor="#A3A2A2" onClick={onClose}>
                        확인
                    </FullSizeButton>
                </ButtonHorizontalContainer>
            </CloseBottomUpDialogBlock>
        </BottomUpDialogFrame>
    );
};

export default CloseBottomUpDialog;
