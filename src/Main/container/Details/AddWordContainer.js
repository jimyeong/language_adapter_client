import { TextInput } from '../../../components/Forms';

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    useContext,
} from 'react';
import styled from 'styled-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import helper from '../../../helper';
import UsecaseContainer from '../UsecaseContainer';

import Colours from '../../../components/Colours';
import { BaseLayoutConfig } from '../../../components/globalUIconfig';
import { AlignBox, Buttons, Forms } from '../../../components';

const { debouncer } = helper;
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
    const [usecases, setUsecases] = useState([]);
    const onClickHandlerAddUseCases = (e) => {
        setUsecases([...usecases, {}]);
    };

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
                    name="ex_en"
                    labelingName="explanation in en"
                />
                <Forms.LabelingTextInput
                    uiType="col"
                    placeholder="explanation_mt"
                    name="ex_mt"
                    labelingName="explanation in mother tongue"
                />
                <br />
                <UsecaseContainer usecases={usecases} />
            </MeaningCard>
        </AddWordContainerBlock>
    );
}

export default AddWordContainer;
