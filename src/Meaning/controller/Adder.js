import React from 'react';
import styled from 'styled-components';
import useInputs from '../../helper/useInputs';
import { Forms } from '../../components';

function Adder({ getValues }) {
    const adderModel = {
        explanation_en: 'explanation_en',
        explanation_mt: 'explanation_mt',
    };

    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        [adderModel.explanation_en]: '',
        [adderModel.explanation_mt]: '',
    });
    return (
        <React.Fragment>
            <Forms.LabelingTextInput
                uiType="col"
                placeholder="explanation_en"
                name={adderModel.explanation_en}
                labelingName="explanation in en"
                onChange={onChangeInputs}
            />
            <Forms.LabelingTextInput
                uiType="col"
                placeholder="explanation_mt"
                name={adderModel.explanation_mt}
                labelingName="explanation in mother tongue"
                onChange={onChangeInputs}
            />
        </React.Fragment>
    );
}

export default Adder;
