import React from 'react';
import styled from 'styled-components';
import AlertDialog from './AlertDialog';

const SystemAlertDialogBlock = styled(AlertDialog)``;
const SystemAlertDialog = ({ show, message, children, ...rest }) => {
    return <SystemAlertDialogBlock show={show} message={message} />;
};

export default SystemAlertDialog;
