import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import helper from '../../helper';
const { pixelToRem } = helper;

const AlertDialogBlock = styled.div`
    text-align: center;
    overflow: hidden;
    &.isShowing {
        overflow: auto;
    }
    .alertDialog__content {
        display: inline-block;
        border-radius: 12px;
        background-color: #e8e8e8;
        width: ${pixelToRem(200)};
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        bottom: -100px;
        z-index: 560;
        transition: bottom 0.2s ease-in-out, height 0.2s ease-in-out;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0; // 자연스럽게 하기 위해서 추가한 코드 후에 삭제할 것
    }
    &.isShowing .alertDialog__content {
        bottom: 30px;
        height: ${pixelToRem(28)};
        box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.1);
    }
    &.isShowing.popup__alert .alertDialog__content {
        bottom: -100px;
        height: ${pixelToRem(28)};
        box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.1);
    }

    .alertDialog__title {
        font-size: ${pixelToRem(12)};
        color: #171515;
        font-weight: 500;
    }
`;
const AlertDialog = ({ show, message, children, ...rest }) => {
    return (
        <AlertDialogBlock
            {...rest}
            className={cn({ isShowing: show }, rest.className)}
        >
            <div className="alertDialog__content">
                <h3 className="alertDialog__title">{message}</h3>
            </div>
        </AlertDialogBlock>
    );
};

export default AlertDialog;
