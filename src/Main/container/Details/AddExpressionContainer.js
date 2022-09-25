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
import AddWordContainer from './AddWordContainer';
import { useNavigate } from 'react-router-dom';

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
const AddExpressionContainer = ({ children }) => {
    const navigate = useNavigate();

    const meaningList = useRef([]);

    const meaningId = useRef(0);
    const [meanings, setMeanings] = useState([]);
    const [_inputValues, onChangeInputs, onResetInputs] = useInputs({
        english_word: '',
    });
    const onClickAddMeaning = () => {
        setMeanings((prev) => [...prev, { id: meaningId.current }]);
        meaningId.current += 1;
    };
    useEffect(() => {
        meaningList.current = meaningList.current.slice(0, meaningList.length);
        return () => {};
    }, [meaningList]);

    // reqeust to server
    const saveExpression = async () => {
        const url = '/v1/words/add';
        const params = {
            ..._inputValues,
            meanings: meaningList.current,
        };
        console.log('@@@params', params);
        const result = await axiosApi.privatePostAxios(url, params, {
            navigate,
            destination: { from: '/dashboard', to: 'dashboard' },
        });
        meaningList.current = [];
    };
    const onSaveClick = () => {
        console.log('meaningList@@@@', meaningList.current);
        console.log('meaningList.length@@@@', meaningList.current.length);
        saveExpression();
    };

    return (
        <Wrapper>
            <br />
            <AlignBox.Right>
                <Buttons.RoundedBoxButton
                    onClick={onClickAddMeaning}
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
                name="english_word"
                labelingName="english_word"
                onChange={onChangeInputs}
            />
            <br />

            {meanings.length > 0 &&
                meanings.map((item, key) => (
                    <AddWordContainer
                        list={meaningList}
                        key={key}
                        item={item}
                    />
                ))}

            <br />
            <br />
            <div style={{ padding: '0 16px' }}>
                <Buttons.RoundedBoxButton
                    onClick={onSaveClick}
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
            </div>
        </Wrapper>
    );
};

export default AddExpressionContainer;
