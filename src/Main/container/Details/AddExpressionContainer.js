import { TextInput } from '../../../components/Forms';

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    useContext,
} from 'react';
import styled from 'styled-components';
import helper, { axiosApi } from '../../../helper';
import UsecaseContainer from '../UsecaseContainer';

import Colours from '../../../components/Colours';
import { BaseLayoutConfig } from '../../../components/globalUIconfig';
import { AlignBox, Buttons, Forms, Chips } from '../../../components';
import useInputs from '../../../helper/useInputs';
import MeaningComponents from '../../../Meaning';
import { setSizeableIcon, CancelIcon } from '../../../components/Icons';

const meaningModel = {};
const Wrapper = styled.div``;

/**
 * 
 * 
 * {
    "userId": 1,
    "english_word":"dress in layers",
    "meanings":[{
        "explanation_en":"wearing many clothes in layer to prepare for coldness",
        "explanation_mt":"옷을 껴입다.",
        "meaning_image":"",
        "usecases":[{
            "lang_english": "this picture is well dscribing what 'dress in layers means'",
            "lang_origin": "이 사진은 옷을 껴입는 다는 영어표현을 잘 묘사하고 있다.",
            "key_phrase": "dress in layers",
            "image_url":"https://media2.giphy.com/media/3o6Zt81XtsGtno6Cju/giphy.gif?cid=fed3a390aamxm3m63tsoavjk7rrn2td55gerktkeym8i9vow&rid=giphy.gif&ct=g"
        }],
        "synonyms":[],
        "meaningMemos": [],
        "tags":[ "behavior", "clothing", "dress in layers"]
    }]
}
 */
const AddExpressionContainer = () => {
    const meaningId = useRef(0);
    const [meanings, setMeanings] = useState([]);
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        english_word: '',
    });
    const onClickAddMeaningButton = useCallback(
        (e) => {
            setMeanings((prev) => [
                ...prev,
                {
                    meaning_id: meaningId.current,
                    english_word: _inputValues.english_word,
                    explanation_en: '',
                    explanation_mt: '',
                    meaning_image: '',
                    usecases: [],
                    synonyms: [],
                    meaningMemos: [],
                    tags: [],
                },
            ]);
            meaningId.current++;
        },
        [meanings]
    );
    const addUsecases = useCallback(
        (index) => {
            setMeanings((prev) => {
                return prev.map((meaning) => {
                    return meaning.id == index
                        ? {
                              ...meaning,
                              lang_english: '',
                              lang_origin: '',
                              key_phrase: '',
                              image_url: '',
                          }
                        : meaning;
                });
            });
        },
        [meanings]
    );
    const onChangeUsecases = useCallback(
        (e, index) => {
            const { name, value } = e.currentTaget;

            setMeanings((prev) => {
                return prev.map((meaning) => {
                    return meaning.id == index
                        ? {
                              ...meaning,
                              [name]: value,
                          }
                        : meaning;
                });
            });
        },
        [meanings]
    );

    return (
        <Wrapper>
            <br />
            <AlignBox.Right>
                <Buttons.RoundedBoxButton
                    onClick={onClickAddMeaningButton}
                    fontSize={16}
                    backgroundColor="#08c"
                    fontColor="#fff"
                >
                    Add more meanings
                </Buttons.RoundedBoxButton>
            </AlignBox.Right>
            <br />
            <Forms.LabelingTextInput
                uiType="row"
                placeholder="english word/expression"
                name="en_word"
                labelingName="en_word"
                onChange={onChangeInputs}
            />
            <br />
            {meanings.length > 0 &&
                meanings.map((meaning, key) => {
                    return (
                        <MeaningComponents.MeaningView
                            key={key}
                            meaning={meaning}
                            addUsecases={addUsecases}
                            onChangeUsecases={onChangeUsecases}
                        />
                    );
                })}

            <Buttons.RoundedBoxButton
                onClick={() => {}}
                full={true}
                backgroundColor="#ff3333"
            >
                <span style={{ fontSize: '24px' }}>👊</span>
                <span
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'yellow',
                    }}
                >
                    Save
                </span>
                <span style={{ fontSize: '24px' }}>👊</span>
            </Buttons.RoundedBoxButton>
        </Wrapper>
    );
};

export default AddExpressionContainer;
