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
import { useImperativeHandle } from 'react';

const { createRandomId } = helper;
const AddWordContainerBlock = styled.div`
    padding: 0 16px 32px;
    background: #e8e9e8;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 5%);
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

const AddWordContainer = React.forwardRef(({ list, children, item }, ref) => {
    let usecaseId = useRef(0);

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
            setUsecases(usecases.filter((item) => item.id !== id));
        },
        [usecases]
    );

    // synonym
    const [synonyms, setSynonyms] = useState([]);
    const addSynonyms = useCallback(() => {
        const id = createRandomId();
        setSynonyms([...synonyms, { id, text: '' }]);
    }, [synonyms]);
    const deleteSynonym = (idx) => {
        setSynonyms((prev) => prev.filter((item) => item.id !== idx));
    };
    const onChangeSynonymInput = (e) => {
        const { value, name } = e.target;
        setSynonyms(
            synonyms.map((item) =>
                item.id == name ? { ...item, text: value } : item
            )
        );
    };

    // memo
    const [meaningMemos, setMeaningMemos] = useState([]);
    const addMemos = useCallback(() => {
        const id = createRandomId();
        setMeaningMemos([...meaningMemos, { id, text: '' }]);
    }, [meaningMemos]);
    const deleteMemos = (idx) => {
        setMeaningMemos((prev) => prev.filter((item) => item.id !== idx));
    };
    const onChangeMemoInput = (e) => {
        const { value, name } = e.target;
        setMeaningMemos(
            meaningMemos.map((item) =>
                item.id == name ? { ...item, text: value } : item
            )
        );
    };

    // category
    const [categories, setCategories] = useState([]);
    const addCategories = useCallback(() => {
        const id = createRandomId();
        setCategories([...categories, { id, text: '' }]);
    }, [categories]);
    const deleteCategories = (idx) => {
        setCategories((prev) => prev.filter((item) => item.id !== idx));
    };
    const onChangeCategoryInput = (e) => {
        const { value, name } = e.target;
        setCategories(
            categories.map((item) =>
                item.id == name ? { ...item, text: value } : item
            )
        );
    };

    console.log('data: ', { ..._inputValues, usecases }, synonyms);
    // useImperativeHandle(ref, () => ({
    //     getFormData: () => {
    //         return { ..._inputValues, usecases, synonyms, memos, categories };
    //     },
    // }));

    useEffect(() => {
        list.current[parseInt(item.id)] = {
            ..._inputValues,
            usecases,
            synonyms,
            meaningMemos,
            categories,
        };
    }, [_inputValues, usecases, synonyms, meaningMemos, categories]);

    return (
        <MeaningComponents.AddCard>
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
            <br />
            <AlignBox.Right>
                <Buttons.RoundedBoxButton
                    onClick={addSynonyms}
                    fontSize={16}
                    backgroundColor="#ffd9cd"
                >
                    Add synonyms
                </Buttons.RoundedBoxButton>
            </AlignBox.Right>
            <br />
            {synonyms.map((s, key) => (
                <Forms.ButtonLabelingBox
                    key={key}
                    placeholder="synonym"
                    labelingName="synonym"
                    onChange={onChangeSynonymInput}
                    name={s.id}
                    value={s.text}
                >
                    <Buttons.IconCircleButton
                        onClick={() => {
                            deleteSynonym(s.id);
                        }}
                        size={36}
                        backgroundColor="white"
                        customStyle={{
                            fontSize: '28px',
                        }}
                    >
                        <CancelIcon stroke="#919191" fill="#919191" />
                    </Buttons.IconCircleButton>
                </Forms.ButtonLabelingBox>
            ))}
            <br />
            <AlignBox.Right>
                <Buttons.RoundedBoxButton
                    onClick={addMemos}
                    fontSize={16}
                    backgroundColor="#ffeeab"
                >
                    Add memos
                </Buttons.RoundedBoxButton>
            </AlignBox.Right>
            <br />
            {meaningMemos.map((m, key) => (
                <Forms.ButtonLabelingBox
                    key={key}
                    placeholder="memo"
                    labelingName="meaningMemos"
                    onChange={onChangeMemoInput}
                    name={m.id}
                    value={m.text}
                >
                    <Buttons.IconCircleButton
                        onClick={() => {
                            deleteMemos(m.id);
                        }}
                        size={36}
                        backgroundColor="white"
                        customStyle={{
                            fontSize: '28px',
                        }}
                    >
                        <CancelIcon stroke="#919191" fill="#919191" />
                    </Buttons.IconCircleButton>
                </Forms.ButtonLabelingBox>
            ))}
            <br />
            <AlignBox.Right>
                <Buttons.RoundedBoxButton
                    onClick={addCategories}
                    fontSize={16}
                    backgroundColor="#d8ffab"
                >
                    Add categories
                </Buttons.RoundedBoxButton>
            </AlignBox.Right>
            <br />
            {categories.map((c, key) => (
                <Forms.ButtonLabelingBox
                    key={key}
                    placeholder="category"
                    labelingName="category"
                    onChange={onChangeCategoryInput}
                    name={c.id}
                    value={c.text}
                >
                    <Buttons.IconCircleButton
                        onClick={() => {
                            deleteCategories(c.id);
                        }}
                        size={36}
                        backgroundColor="white"
                        customStyle={{
                            fontSize: '28px',
                        }}
                    >
                        <CancelIcon stroke="#919191" fill="#919191" />
                    </Buttons.IconCircleButton>
                </Forms.ButtonLabelingBox>
            ))}
            <br />
            <br />
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
        </MeaningComponents.AddCard>
    );
});

export default AddWordContainer;
