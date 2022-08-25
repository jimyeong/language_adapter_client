import { TextInput } from '../../../components/Forms';

import React from 'react';
import styled from 'styled-components';
import UsecaseCard from '../../view/Usecases/UsecaseCard';
import { LabelingTextInput } from '../../../components/Forms';
import { Buttons, AlignBox } from '../../../components';

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
    return (
        <AddWordContainerBlock>
            <UsecaseCard index={1}>
                <AlignBox.Right>
                    <Buttons.IconCircleButton size={50}>
                        <div>image</div>
                    </Buttons.IconCircleButton>
                </AlignBox.Right>
                <LabelingTextInput
                    uiType="col"
                    placeholder="definition in en"
                    name="df_en"
                    labelingName="definition in aa"
                />
                <LabelingTextInput
                    uiType="col"
                    placeholder="definition in your language"
                    name="df_native"
                    labelingName="definition in native"
                />
                <div>
                    <span className="label__input">key phrase</span>
                    <TextInput type="basic" placeholder="key phrase" />
                </div>
                <p>image thing</p>
            </UsecaseCard>
            <UsecaseCard index={2}>
                <LabelingTextInput
                    uiType="col"
                    placeholder="definition in en"
                    name="df_en"
                    labelingName="definition in aa"
                />
                <LabelingTextInput
                    uiType="col"
                    placeholder="definition in your language"
                    name="df_native"
                    labelingName="definition in native"
                />
                <div>
                    <span className="label__input">key phrase</span>
                    <TextInput type="basic" placeholder="key phrase" />
                </div>
                <p>image thing</p>
            </UsecaseCard>
        </AddWordContainerBlock>
    );
}

export default AddWordContainer;
