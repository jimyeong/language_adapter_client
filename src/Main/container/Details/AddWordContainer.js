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
import MeaningView from '../../../Meaning';

const { createRandomId } = helper;
const AddWordContainerBlock = styled.div`
    padding: 0 16px;
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
    const addSynonyms = useCallback(() => {
        const id = createRandomId();
        setSynonyms([...synonyms, { id, text: '' }]);
    }, [synonyms]);

    const meaningModel = {
        explanation_en: 'explanation_en',
        explanation_mt: 'explanation_mt',
        usecases: [],
    };
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        [meaningModel.explanation_en]: '',
        [meaningModel.explanation_mt]: '',
    });

    const [usecases, setUsecases] = useState([]);
    const onClickHandlerAddUseCases = useCallback(
        (e) => {
            setUsecases([
                ...usecases,
                {
                    id: usecaseId.current,
                    searchTerm: '',
                    selectedImage: '',
                    definitionInEn: '',
                    definitionInMt: '',
                    keyphrase: '',
                },
            ]);
            usecaseId.current += 1;
        },
        [usecases]
    );
    const onChangeUsecase = useCallback((newList) => {
        setUsecases(newList);
    }, []);
    const onClickDeleteUsecase = useCallback(
        (id) => {
            console.log(
                '@@@result',
                usecases.filter((item) => item.id !== id)
            );
            setUsecases(usecases.filter((item) => item.id !== id));
        },
        [usecases]
    );
    console.log('data: ', { ..._inputValues, usecases });

    return (
        <AddWordContainerBlock>
            <MeaningView.AddCard>
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
                {usecases.length > 0 &&
                    usecases.map((usecase, key) => (
                        <UsecaseContainer
                            key={key}
                            list={usecases}
                            item={usecase}
                            onChangeUsecase={onChangeUsecase}
                            onClickDeleteUsecase={onClickDeleteUsecase}
                        />
                    ))}
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
            </MeaningView.AddCard>
        </AddWordContainerBlock>
    );
}

export default AddWordContainer;
