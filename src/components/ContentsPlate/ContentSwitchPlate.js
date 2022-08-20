import React from 'react';
import styled from 'styled-components';
import ContentPlateFrame from './ContentPlateFrame';
import { SwitchButton } from '../Buttons';

const ContentSwitchPlate = ({
    switchStatus,
    callback,
    label,
    children,
    ...rest
}) => {
    const onToggle = (status) => {
        if (callback) {
            callback(status);
        }
    };
    return (
        <ContentPlateFrame {...rest} label={label}>
            <SwitchButton switchStatus={switchStatus} callback={onToggle} />
        </ContentPlateFrame>
    );
};

export default ContentSwitchPlate;
