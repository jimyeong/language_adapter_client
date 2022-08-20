import React from 'react';
import styled from 'styled-components';
import RoundChip from './RoundChip';

const colors = [
    '#6C57A7',
    '#009DE3',
    '#65AA3B',
    '#DC943E',
    '#F03D7D',
    '#9502F1',
    '#00C532',
    '#E003F0',
    '#EFD505',
    '#F15D08',
];
const setRandomColor = () => {
    const index = Math.floor(Math.random() * 10);
    return colors[index];
};
const RandomColorBorderRoundChip = ({ text, children, ...rest }) => {
    return <RoundChip borderColor={setRandomColor()} text={text} />;
};

export default RandomColorBorderRoundChip;
