import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Forms from '../../components/Forms';

// import UsecaseCard from '../../view/Usecases/UsecaseCard';
import UsecaseCard from '../view/Usecases/UsecaseCard';
import { Buttons, AlignBox, Chips } from '../../components';
import { Carousel } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const DeleteUsecaseButton = styled.div`
    position: absolute;
    top: 0;
    right: 30px;
    width: 30px;
    height: 26px;
    color: #282828;
    font-weight: bold;
    font-size: 16px;
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${(props) => Buttons.utils.normalizeButton(props)}
`;
function UsecaseContainer({
    list,
    item,
    onChangeUsecase,
    onClickDeleteUsecase,
}) {
    let gf = useRef();
    const { searchTerm, image_url, lang_english, lang_origin, key_phrase } =
        item;
    // const [searchTerm, setSearchTerm] = useState('');
    // const [selectedImage, setSeletedImage] = useState('');
    console.log('what is the current? ?? ? ? ? item', item);
    const onChange = useCallback(
        (e) => {
            const { value, name } = e.currentTarget;
            const newList = list.map((q) => {
                const index = item.id;
                return q.id == index ? { ...q, [name]: value } : q;
            });

            onChangeUsecase(newList);
            console.log('실행됨', newList);
        },
        [item]
    );
    const fetchGif = useCallback(
        (offset) => {
            return gf.search(searchTerm, {
                sort: 'relavant',
                offset,
                limit: 10,
            });
        },
        [searchTerm]
    );
    useEffect(() => {
        gf = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
        return () => {};
    }, [gf.current, searchTerm]);

    return (
        <UsecaseCard>
            <DeleteUsecaseButton
                onClick={() => {
                    onClickDeleteUsecase(item.id);
                }}
                backgroundColor="#ebceff"
            >
                X
            </DeleteUsecaseButton>
            <Forms.LabelingTextInput
                uiType="col"
                placeholder="definition in en"
                name="lang_english"
                labelingName="english definition"
                value={lang_english}
                onChange={onChange}
            />
            <Forms.LabelingTextInput
                uiType="col"
                placeholder="definition in mother tongue"
                name="lang_origin"
                labelingName="mother tongue definition"
                value={lang_origin}
                onChange={onChange}
            />
            <Forms.LabelingTextInput
                uiType="col"
                placeholder="keyphrase"
                name="key_phrase"
                labelingName="keyphrase"
                value={key_phrase}
                onChange={onChange}
            />
            <Forms.LabelingBox uiType="col" labelingName="look up image">
                <Forms.Searchbar
                    onClickSearch={(searchTerm) => {
                        const index = item.id;
                        const newList = list.map((item) =>
                            item.id == index ? { ...item, searchTerm } : item
                        );
                        onChangeUsecase(newList);
                    }}
                    Button={Buttons.IconCircleButton}
                />
                <br />
                {searchTerm !== '' && (
                    <Carousel
                        key={searchTerm}
                        noLink={true}
                        gifHeight={200}
                        gutter={6}
                        fetchGifs={fetchGif}
                        onGifClick={(gif, e) => {
                            const index = item.id;
                            const image_url = gif.images.downsized.url;
                            const newList = list.map((item) =>
                                item.id == index ? { ...item, image_url } : item
                            );
                            onChangeUsecase(newList);
                        }}
                    />
                )}
            </Forms.LabelingBox>
            {image_url !== '' && (
                <Forms.LabelingBox labelingName="selected image" uiType="col">
                    <div
                        style={{
                            border: '4px solid #1c101d',
                            borderRadius: '8px',
                        }}
                        className="border__frame"
                    >
                        <img src={image_url} alt="selected image" />
                    </div>
                </Forms.LabelingBox>
            )}
        </UsecaseCard>
    );
}

export default React.memo(UsecaseContainer);
