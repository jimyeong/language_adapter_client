import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ColorTooltip from './ColorTooltip';
import ColorItem from './ColorItem';
import useOutsideClickDetector from '../../helper/useOutsideClickDetector';
const paddingSpace = 4;

const ColorPickerControllerBlock = styled.div`
    position: relative;
    display: inline-block;
    .colors__wrapper {
        margin-left: -4px;
    }
`;
const ColorPickerController = ({
    onChange,
    selectedColor,
    colors,
    children,
    ...rest
}) => {
    const [values, setValues] = useState({
        active: false,
        currentColor: '#E3D4FF',
    });
    const { active, currentColor } = values;
    const ref = useRef(null);

    const handleCloseTooltip = (e) => {
        e.stopPropagation();
        setValues({ ...values, active: false });
    };

    // 바깥영역 클릭시 꺼지게 만든다.
    useOutsideClickDetector(ref, handleCloseTooltip);
    const onClick = () => {
        setValues({
            ...values,
            active: !active,
        });
    };
    const onClickColorItem = (selectedColor) => {
        setValues(selectedColor);
        if (onChange) return onChange(selectedColor.currentColor);
    };
    return (
        <ColorPickerControllerBlock ref={ref}>
            <div
                onClick={onClick}
                style={{
                    backgroundColor: selectedColor
                        ? selectedColor
                        : currentColor,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                }}
            ></div>
            {active && (
                <ColorTooltip>
                    <div className="clearfix colors__wrapper">
                        {colors.map((color, key) => (
                            <ColorItem
                                paddingSpace={paddingSpace}
                                onClick={onClickColorItem}
                                color={color}
                                key={key}
                            />
                        ))}
                    </div>
                </ColorTooltip>
            )}
        </ColorPickerControllerBlock>
    );
};

export default ColorPickerController;
