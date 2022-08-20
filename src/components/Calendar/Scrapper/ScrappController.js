import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import helper from '../../../helper';

const { pixelToRem } = helper;

const ScrappControllerBlock = styled.span`
    color: #a3a2a2;
    margin-bottom: ${pixelToRem(60)};
    .options__item {
        font-size: ${pixelToRem(12)};
        font-weight: 500;
        &.isActive {
            color: #9579c9;
            font-weight: 600;
        }
    }
`;
const ScrappController = ({
    onChangeScrapLevel,
    scrapLevel,
    children,
    ...rest
}) => {
    return (
        <ScrappControllerBlock {...rest}>
            <span
                onClick={() => onChangeScrapLevel(1)}
                className={cn({
                    options__item: true,
                    isActive: scrapLevel == 1 ? true : false,
                })}
            >
                지원고민중
            </span>{' '}
            |{' '}
            <span
                onClick={() => onChangeScrapLevel(2)}
                className={cn({
                    options__item: true,
                    isActive: scrapLevel == 2 ? true : false,
                })}
            >
                지원 결과대기중
            </span>
        </ScrappControllerBlock>
    );
};

export default ScrappController;
