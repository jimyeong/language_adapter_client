import React from 'react';
import styled from 'styled-components';
import { setSizeableIcon } from '../../../components/Icons';
import { JustifyingContainer } from '../../../components/LayoutContainer';
import { PageTitle } from '../../../components/PageComposition';
import ManagementTypingTitle from './ManagementTypingTitle';

const EditableTitlePanel = ({
    isEditable,
    name,
    onChange,
    value,
    placeholder,
    title,
    icon,
    children,
    ...rest
}) => {
    const renderTitle = (isEditable) => {
        if (isEditable)
            return (
                <ManagementTypingTitle
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            );
        if (!isEditable) return <PageTitle title={title} />;
    };
    const Icon = icon;
    return (
        <React.Fragment>
            <JustifyingContainer>
                {renderTitle(isEditable)}
                {setSizeableIcon(Icon)}
            </JustifyingContainer>
        </React.Fragment>
    );
};

export default EditableTitlePanel;
