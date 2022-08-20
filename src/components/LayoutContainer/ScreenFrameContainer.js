import React from 'react';
import styled from 'styled-components';

/*
props: empltySpaceHeight
creator: jimmy
date: 2022.1.28
description: emptySpaceHeight를 주면 , 그 크기를 제외한 영역을 가득 채워서, 컨텐츠들을 그려주는 컨테이너 height : vh 속성을 이용한다.
반드시 px 단위로 값을 입력해야 한다.  
*/
const ScreenFrameContainerBlock = styled.div`
    height: calc(100vh - ${(props) => props.emptySpaceHeight});
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const ScreenFrameContainer = ({
    emptySpaceHeight = '0px',
    children,
    ...rest
}) => {
    const setEmptyHeight = (str) => {
        const a = String(str).split('px');
        return a[0] + 'px';
    };
    return (
        <ScreenFrameContainerBlock
            emptySpaceHeight={setEmptyHeight(emptySpaceHeight)}
        >
            {children}
        </ScreenFrameContainerBlock>
    );
};

export default ScreenFrameContainer;
