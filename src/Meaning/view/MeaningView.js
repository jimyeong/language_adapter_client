import React, { useRef } from 'react';
import styled from 'styled-components';
import { AlignBox, Buttons, Forms, Chips } from '../../components';
import UsecaseContainer from '../../Main/container/UsecaseContainer';
import { CancelIcon } from '../../components/Icons';

/**
 * onChangeInputs
 * @param {*} param0
 * @returns
 */
function MeaningView({
    children,
    meaning,
    explanation_en,
    explanation_mt,
    onChangeInputs,
    usecases,
    onHandleUsecases,
    onClickDeleteUsecases,
    addSynonyms,
    synonyms,
    onChangeSynonymInput,
    deleteSynonym,
    addMemos,
    memos,
    deleteMemos,
    onChangeMemoInput,
    addCategories,
    categories,
    onChangeCategoryInput,
    deleteCategories,
    onSaveClick,

    addUsecases,
    onChangeUsecases,
}) {
    return (
        <React.Fragment>
            <br />
            <MeaningView.AddCard>
                <AlignBox.Right>
                    <Buttons.RoundedBoxButton
                        onClick={(e) => {
                            addUsecases(meaning.id);
                        }}
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
                    name={[meaning.explanation_en]}
                    labelingName="explanation in en"
                    onChange={onChangeInputs}
                    value={meaning.explanation_en}
                />
                <Forms.LabelingTextInput
                    uiType="col"
                    placeholder="explanation_mt"
                    name={[meaning.explanation_mt]}
                    labelingName="explanation in mother tongue"
                    onChange={onChangeInputs}
                    value={meaning.explanation_mt}
                />
                <br />
                {meaning.usecases.length > 0 &&
                    meaning.usecases.map((usecase, key) => (
                        <UsecaseContainer
                            key={key}
                            list={meaning.usecases}
                            item={usecase}
                            onChangeUsecases={onChangeUsecases}
                            onClickDeleteUsecase={onClickDeleteUsecases}
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
                {meaning.synonyms.map((s, key) => (
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
                        onClick={() => {}}
                        fontSize={16}
                        backgroundColor="#ffeeab"
                    >
                        Add memos
                    </Buttons.RoundedBoxButton>
                </AlignBox.Right>
                <br />
                {meaning.memos.map((m, key) => (
                    <Forms.ButtonLabelingBox
                        key={key}
                        placeholder="memo"
                        labelingName="memo"
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
                {meaning.categories.map((c, key) => (
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
            </MeaningView.AddCard>
        </React.Fragment>
    );
}

export default MeaningView;
