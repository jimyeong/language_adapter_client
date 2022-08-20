import React from 'react';
import styled from 'styled-components';
import { setSizeableIcon } from '../../../components/Icons';
import { JustifyingContainer } from '../../../components/LayoutContainer';
import { PageTitle } from '../../../components/PageComposition';

/*
props: title, logo
creator: jimmy
date: 2022.1.28
description: logo ={<Logo>} 이런 식으로 넘겨줘야 에러 안남
*/

const TitlePanel = ({ title, icon, children, ...rest }) => {
    const Icon = icon;
    return (
        <React.Fragment>
            <JustifyingContainer {...rest}>
                <PageTitle title={title} />
                <div style={{ width: '30px' }}>{setSizeableIcon(Icon)}</div>
            </JustifyingContainer>
        </React.Fragment>
    );
};

export default TitlePanel;
