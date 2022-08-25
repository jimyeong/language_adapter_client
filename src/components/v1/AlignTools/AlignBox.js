import React from 'react';
import styled from 'styled-components';

const AlignBox = {};

AlignBox.Right = ({ children }) => {
    return (
        <div className="clearfix">
            {React.Children.map(children, (child, index) => {
                return <div style={{ float: 'right' }}>{child}</div>;
            })}
        </div>
    );
};

export default AlignBox;
