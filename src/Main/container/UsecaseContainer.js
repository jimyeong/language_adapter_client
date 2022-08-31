import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Forms from '../../components/Forms';

// import UsecaseCard from '../../view/Usecases/UsecaseCard';
import UsecaseCard from '../view/Usecases/UsecaseCard';
import { Buttons, AlignBox } from '../../components';
import { Carousel } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const UsecaseContainerBlock = styled.div``;

function UsecaseContainer({ usecases, length }) {
    let gf = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedImage, setSeletedImage] = useState('');
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
    if (usecases.length > 0) {
        return usecases.map((item, i) => {
            return (
                <UsecaseCard key={i}>
                    <Forms.LabelingTextInput
                        uiType="col"
                        placeholder="definition in en"
                        name="df_en"
                        labelingName="definition in aa"
                    />
                    <Forms.LabelingTextInput
                        uiType="col"
                        placeholder="definition in your language"
                        name="df_native"
                        labelingName="definition in native"
                    />
                    <Forms.LabelingTextInput
                        uiType="col"
                        placeholder="keyphrase"
                        name="key_phrase"
                        labelingName="keyphrase"
                    />
                    <Forms.LabelingBox
                        uiType="col"
                        labelingName="look up image"
                    >
                        <Forms.Searchbar
                            onClickSearch={(term) => {
                                setSearchTerm(term);
                            }}
                            Button={Buttons.IconCircleButton}
                        />
                        {searchTerm !== '' && (
                            <Carousel
                                key={searchTerm}
                                noLink={true}
                                gifHeight={200}
                                gutter={6}
                                fetchGifs={fetchGif}
                                onGifClick={(gif, e) => {
                                    setSeletedImage(gif.images.downsized.url);
                                }}
                            />
                        )}
                    </Forms.LabelingBox>
                    {selectedImage !== '' && (
                        <Forms.LabelingBox
                            labelingName="selected image"
                            uiType="col"
                        >
                            <div
                                style={{
                                    border: '4px solid #1c101d',
                                    borderRadius: '8px',
                                }}
                                className="border__frame"
                            >
                                <img src={selectedImage} alt="selected image" />
                            </div>
                        </Forms.LabelingBox>
                    )}
                </UsecaseCard>
            );
        });
    }
    return null;
}

export default UsecaseContainer;
