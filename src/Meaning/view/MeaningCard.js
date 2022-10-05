import React from 'react';
import styled from 'styled-components';

import helper from '../../helper';
import LabelText from '../../components/v1/Texts/LabelText';
const { pixelToRem, setColor } = helper;

const MeaningCardBlock = styled.div`
    position: relative;
    display: block;
    background-color: #f1f1f1;
    padding: ${pixelToRem(14)} ${pixelToRem(34)};
    border-radius: 13px;
    .quiz__btn {
        width: 30px;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        right: 0;
        border: none;
        cursor: pointer;
        &.quiz__delete {
            top: 0;
            background: #412e3e;
            color: white;
            &:hover {
                background-color: ${(props) => setColor('ff0000', 0)};
            }
            &:active {
                background-color: ${(props) => setColor('ff0000', 10)};
            }
        }
        &.quiz__edit {
            top: 30px;
            background: #6150a2;
            color: white;
            &:hover {
                background-color: ${(props) => setColor('6150a2', 20)};
            }
            &:active {
                background-color: ${(props) => setColor('6150a2', -10)};
            }
        }
    }

    &.active {
        background: ${(props) => setColor('#f1f1f1', -20)};
    }
    & + & {
        margin-top: ${pixelToRem(10)};
    }
    .colour-chip {
        width: 100%;
        height: ${pixelToRem(4)};
    }
    .tbl-col {
        display: table-cell;
        &.type-colour {
            width: ${pixelToRem(66)};
            vertical-align: top;
            padding-top: ${pixelToRem(6)};
            padding-right: ${pixelToRem(18)};
        }
        .column__tit {
            color: #200e40;
            line-height: 1.3;
            font-size: ${pixelToRem(17)};
            font-weight: 500;
        }
    }
    .expression__stc {
        color: #7ca7ff;
        width: 100%;
        font-weight: bold;
        border: none;
        resize: none;
        background-color: transparent;
    }
    .expression__date {
        color: #b1b1b1;
        margin-top: 0.3rem;
    }
    .expression__stc {
    }
    .expression__tit {
        color: #363636;
    }
    .tag__txt {
        color: #5b0e4e;
    }
    .expression__tit {
        color: #363636;
    }
`;
const labelingStyles = {
    textTransform: 'uppercase',
    marginTop: '32px',
    marginBottom: '8px',
};

function MeaningCard({ english_word: word, children }) {
    return (
        <MeaningCardBlock>
            <h3 className="expression__tit">{word.english_word}</h3>
            {word.meanings.length > 0 &&
                word.meanings.map((meaning, key) => {
                    return (
                        <div key={key}>
                            {children}
                            <br />
                            <LabelText
                                labelType="row"
                                labelName="en"
                                text={meaning.explanation_en}
                            />
                            <LabelText
                                labelType="row"
                                labelName="mt"
                                text={meaning.explanation_mt}
                            />
                            <br />
                            {meaning.meaning_image && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: meaning.meaning_image,
                                    }}
                                ></div>
                            )}

                            {meaning.usecases.length > 0 && (
                                <h4 style={labelingStyles}>use cases</h4>
                            )}
                            {meaning.usecases?.map((usecase, key) => {
                                return (
                                    <div key={key}>
                                        <div key={key}>
                                            {usecase.image_url !== '' && (
                                                <div>
                                                    <img
                                                        src={usecase.image_url}
                                                        alt=""
                                                    />
                                                </div>
                                            )}
                                            <LabelText
                                                labelType="row"
                                                labelName="en"
                                                text={usecase.lang_english}
                                            />
                                            <LabelText
                                                labelType="row"
                                                labelName="mt"
                                                text={usecase.lang_origin}
                                            />
                                            <br />
                                            <LabelText
                                                labelType="col"
                                                labelName="keyphrase"
                                                text={usecase.key_phrase}
                                            />
                                        </div>
                                        <br />
                                    </div>
                                );
                            })}
                            <br />
                            {meaning.synonyms.length > 0 && (
                                <h4 style={labelingStyles}>synonyms</h4>
                            )}
                            {meaning.synonyms?.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <div key={key}>
                                            <span>{item.synonym}</span>
                                        </div>
                                    </div>
                                );
                            })}
                            <br />
                            {meaning.meaningMemos && (
                                <h4 style={labelingStyles}>memo</h4>
                            )}
                            {meaning.meanigMemos?.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <div key={key}>
                                            <span>{item.memo_content}</span>
                                        </div>
                                    </div>
                                );
                            })}
                            <br />
                            {meaning.tags.length > 0 && (
                                <h4
                                    style={{
                                        textTransform: 'uppercase',
                                        marginTop: '16px',
                                        marginBottom: '8px',
                                    }}
                                >
                                    categories
                                </h4>
                            )}
                            {meaning.tags?.map((item, key) => {
                                return (
                                    <div className="tag__container" key={key}>
                                        <div key={key}>
                                            <span className="tag__txt">
                                                {item.tag_content}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </MeaningCardBlock>
    );
}

export default MeaningCard;
