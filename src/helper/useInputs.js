import React, { useState } from 'react';
import styled from 'styled-components';

const useInputs = (intialValue) => {
    const [_inputValues, setValues] = useState(intialValue);
    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setValues({
            ..._inputValues,
            [name]: value,
        });
    };

    const onResetInputs = () => {
        setValues(intialValue);
    };
    return [_inputValues, onChangeInputs, onResetInputs];
};

export default useInputs;
