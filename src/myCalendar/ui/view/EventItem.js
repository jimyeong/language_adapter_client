import React, { useState } from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import DOMPurify from 'dompurify';
import { RoundChip } from '../../../components/Chips';
import { ConfirmSlidingDialog } from '../../../components/Dialogs';
import { MeaningCard } from '../../../Main';

const { pixelToRem, setColor, dateBasicFormatter, lineBreaker } = helper;

const EventItemBlock = styled.li`
    position: relative;
    display: block;
    background-color: #f1f1f1;
    padding: ${pixelToRem(14)} ${pixelToRem(34)};
    border-radius: 13px;
    .quiz__btn {
        width: 30px;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        right: 0;
        border: none;
        cursor: pointer;
        &.quiz__delete {
            top: 0;
            background: #412e3e;
            color: white;
            &:hover {
                background-color: ${(props) => setColor('ff0000', 0)};
            }
            &:active {
                background-color: ${(props) => setColor('ff0000', 10)};
            }
        }
        &.quiz__edit {
            top: 30px;
            background: #6150a2;
            color: white;
            &:hover {
                background-color: ${(props) => setColor('6150a2', 20)};
            }
            &:active {
                background-color: ${(props) => setColor('6150a2', -10)};
            }
        }
    }

    &.active {
        background: ${(props) => setColor('#f1f1f1', -20)};
    }
    & + & {
        margin-top: ${pixelToRem(10)};
    }
    .colour-chip {
        width: 100%;
        height: ${pixelToRem(4)};
    }
    .tbl-col {
        display: table-cell;
        &.type-colour {
            width: ${pixelToRem(66)};
            vertical-align: top;
            padding-top: ${pixelToRem(6)};
            padding-right: ${pixelToRem(18)};
        }
        .column__tit {
            color: #200e40;
            line-height: 1.3;
            font-size: ${pixelToRem(17)};
            font-weight: 500;
        }
    }
    .expression__stc {
        color: #7ca7ff;
        width: 100%;
        font-weight: bold;
        border: none;
        resize: none;
        background-color: transparent;
    }
    .expression__date {
        color: #b1b1b1;
        margin-top: 0.3rem;
    }
    .expression__stc {
    }
    .expression__tit {
        color: #363636;
    }
    .tag__txt {
        color: #5b0e4e;
    }
`;

const EventItem = ({ englishWords, index, children, ...rest }) => {
    const english_word = englishWords[index];

    return (
        <EventItemBlock>
            {/* <MeaningCard english_word={english_word}>{children}</MeaningCard> */}
        </EventItemBlock>
    );
};

export default EventItem;
