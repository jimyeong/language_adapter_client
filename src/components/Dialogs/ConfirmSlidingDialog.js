import React from 'react';
import styled from 'styled-components';
import SlidingBottomUpDialogFrame from './SlidingBottomUpDialogFrame';
import { ButtonHorizontalContainer } from '../LayoutContainer';
import { FullSizeButton } from '../Buttons';
import helper from '../../helper';
const { pixelToRem } = helper;

const ConfirmSlidingDialogBlock = styled.div`
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
const ConfirmSlidingDialog = ({
    show,
    title,
    desc,
    height = 300,
    successCallback,
    cancelCallback,
    children,
    ...rest
}) => {
    return (
        <React.Fragment>
            <SlidingBottomUpDialogFrame height={height} show={show}>
                <ConfirmSlidingDialogBlock>
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
                            onClick={successCallback}
                        >
                            확인
                        </FullSizeButton>
                        <FullSizeButton
                            backgroundColor="#A3A2A2"
                            onClick={cancelCallback}
                        >
                            취소
                        </FullSizeButton>
                    </ButtonHorizontalContainer>
                </ConfirmSlidingDialogBlock>
            </SlidingBottomUpDialogFrame>
        </React.Fragment>
    );
};

export default ConfirmSlidingDialog;
