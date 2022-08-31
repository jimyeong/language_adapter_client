import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import { IconSearch, setSizeableIcon } from '../Icons';
import Colours from '../Colours';
import useInputs from '../../helper/useInputs';

const SearchbarBlock = styled.div`
    position: relative;
    padding-left: 40px;
    padding-right: 50px;
    height: 36px;
    .svg__ctrl {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .btn__frame {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

function Searchbar({ children, type, Button, onClickSearch }) {
    const inputId = 'term';
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        [inputId]: '',
    });
    const [] = useState({});
    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (_inputValues[inputId] !== '') {
            onClickSearch && onClickSearch(_inputValues[inputId]);
            onResetInputs();
        }
    };
    const onKeyDown = (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        if (e.keyCode == 13 || e.charCode == 13) {
            if (_inputValues[inputId] !== '') {
                onClickSearch && onClickSearch(_inputValues[inputId]);
                onResetInputs();
            }
        }
    };
    if (!type)
        return (
            <SearchbarBlock>
                {setSizeableIcon(
                    <IconSearch
                        fill={Colours.gray_no1}
                        stroke={Colours.gray_no1}
                    />
                )}
                <TextInput
                    name={inputId}
                    value={_inputValues.term}
                    onChange={onChangeInputs}
                    onKeyDown={onKeyDown}
                />
                {Button && (
                    <div className="btn__frame">
                        <Button
                            size={40}
                            backgroundColor={Colours.green_no1}
                            onClick={onClick}
                        >
                            Find!
                        </Button>
                    </div>
                )}
            </SearchbarBlock>
        );
}

export default Searchbar;
