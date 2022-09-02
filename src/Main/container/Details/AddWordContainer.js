import { TextInput } from '../../../components/Forms';

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    useContext,
} from 'react';
import styled from 'styled-components';
import helper from '../../../helper';
import UsecaseContainer from '../UsecaseContainer';

import Colours from '../../../components/Colours';
import { BaseLayoutConfig } from '../../../components/globalUIconfig';
import { AlignBox, Buttons, Forms, Chips } from '../../../components';
import useInputs from '../../../helper/useInputs';

const { createRandomId } = helper;
const AddWordContainerBlock = styled.div`
    padding: 0 16px;
`;
const MeaningCard = styled.div`
    border-radius: 8px;
    padding: ${(props) => `${BaseLayoutConfig.mobileSidePadding}px`};
    padding-bottom: ${(props) =>
        ` ${2 * BaseLayoutConfig.mobileSidePadding}px`};
    background-color: #f1fff9;
`;

/**
 * 
 * 
 {
    "userId": 1,
    "english_word":"lean back",
    "meanings":[{
        "explanation_en":"To bend or recline backwards.",
        "explanation_mt":"",
        "meaning_image":"",
        "usecases":[{
            "lang_english": "my brother always sits with leaning back in the chair",
            "lang_origin": "동생은 항상 뒤로 기대서 앉는다.",
            "key_phrase": "lean back",
            "usecase_image": "blah"
        }],
        "synonyms":[],
        "meaningMemos": [],
        "tags":[ "behavior", "sit", "lean back"]
    }]
}
 */
function AddWordContainer({ children }) {
    let usecaseId = useRef(0);
    // synonyms
    const [synonyms, setSynonyms] = useState([]);
    const addSynonyms = () => {
        const id = createRandomId();
        setSynonyms([...synonyms, { id, text: '' }]);
    };

    const meaningModel = {
        explanation_en: 'explanation_en',
        explanation_mt: 'explanation_mt',
        usecases: [],
    };
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        [meaningModel.explanation_en]: '',
        [meaningModel.explanation_mt]: '',
    });

    const [usecases, setUsecases] = useState(meaningModel.usecases);
    const onClickHandlerAddUseCases = (e) => {
        setUsecases([...usecases, { id: usecaseId.current }]);
        usecaseId.current += 1;
    };

    console.log(_inputValues);
    return (
        <AddWordContainerBlock>
            <MeaningCard>
                <AlignBox.Right>
                    <Buttons.RoundedBoxButton
                        onClick={onClickHandlerAddUseCases}
                        fontSize={16}
                        backgroundColor="#abffe9"
                    >
                        Add more usecases
                    </Buttons.RoundedBoxButton>
                </AlignBox.Right>
                <br />
                <Forms.LabelingTextInput
                    uiType="col"
                    placeholder="explanation_en"
                    name={meaningModel.explanation_en}
                    labelingName="explanation in en"
                    onChange={onChangeInputs}
                />
                <Forms.LabelingTextInput
                    uiType="col"
                    placeholder="explanation_mt"
                    name={meaningModel.explanation_mt}
                    labelingName="explanation in mother tongue"
                    onChange={onChangeInputs}
                />
                <br />
                <UsecaseContainer usecases={usecases} />
                <AlignBox.Right>
                    <Buttons.RoundedBoxButton
                        onClick={addSynonyms}
                        fontSize={16}
                        backgroundColor="#ffd9cd"
                    >
                        Add synonyms
                    </Buttons.RoundedBoxButton>
                </AlignBox.Right>
                {synonyms.map((synonymForm, key) => (
                    <Forms.LabelingTextInput
                        uiType="row"
                        placeholder="synonym"
                        name={synonymForm.id}
                        labelingName="synonym"
                        onChange={onChangeInputs}
                        key={key}
                    />
                ))}

                <AlignBox.Right>
                    <Buttons.RoundedBoxButton
                        onClick={() => {}}
                        fontSize={16}
                        backgroundColor="#ffeeab"
                    >
                        Add memos
                    </Buttons.RoundedBoxButton>
                </AlignBox.Right>
                <AlignBox.Right>
                    <Buttons.RoundedBoxButton
                        onClick={() => {}}
                        fontSize={16}
                        backgroundColor="#d8ffab"
                    >
                        Add categories
                    </Buttons.RoundedBoxButton>
                </AlignBox.Right>
            </MeaningCard>
        </AddWordContainerBlock>
    );
}

export default AddWordContainer;
