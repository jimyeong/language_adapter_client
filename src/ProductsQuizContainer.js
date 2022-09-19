import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ChineseChive from './assets/imgs/chinese_chive.jpeg';
import ChineseLeaf from './assets/imgs/chinese_leaf.jpeg';
import Garlic from './assets/imgs/garlic.jpeg';
import Ginger from './assets/imgs/ginger.jpeg';
import GreenPumKin from './assets/imgs/green_pumkin.jpeg';
import GreenFaKChoi from './assets/imgs/green_fak_choi.jpeg';
import LotusRoot from './assets/imgs/lotus_root.jpeg';
import OysterMushroom from './assets/imgs/oyster_mushroom.jpeg';
import Radish from './assets/imgs/radish.jpeg';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    focusOnSelect: false,
};
function MemoriseJob() {
    const arr = [
        {
            code: '710 168',
            product: 'plastic bag(small)',
            codeActive: false,
        },
        { code: '710 326', product: 'plastic bag(large)', codeActive: false },
        {
            code: '600 001',
            product: 'chinese leaf',
            codeActive: false,
            image: ChineseLeaf,
        },
        {
            code: '600 002',
            product: 'radish',
            codeActive: false,
            image: Radish,
        },
        { code: '600 003', product: 'cucumber', codeActive: false },
        { code: '600 005', product: 'spinach', codeActive: false },
        {
            code: '600 012',
            product: 'oyster mushroom',
            codeActive: false,
            image: OysterMushroom,
        },
        {
            code: '600 017',
            product: 'garlic(large)',
            codeActive: false,
            image: Garlic,
        },
        {
            code: '600 018',
            product: 'garlic(large)',
            codeActive: false,
            image: Garlic,
        },
        {
            code: '600 019',
            product: 'ginger',
            codeActive: false,
            image: Ginger,
        },
        { code: '600 020', product: 'spring onion', codeActive: false },
        {
            code: '600 023',
            product: 'kow choi(chinese chives)',
            codeActive: false,
            image: ChineseChive,
        },
        {
            code: '600 026',
            product: 'green pumpkin',
            codeActive: false,
            image: GreenPumKin,
        },
        { code: '600 101', product: 'spring onion (long)', codeActive: false },
        { code: '600 597', product: 'lemon grass', codeActive: false },
        { code: '600 602', product: 'coriander', codeActive: false },
        { code: '600 605', product: 'garlic stem', codeActive: false },
        { code: '640 009', product: 'one topping hot food', codeActive: false },
        { code: '640 010', product: 'two topping hot food', codeActive: false },
        {
            code: '640 011',
            product: 'three topping hot food',
            codeActive: false,
        },
        {
            code: '640 012',
            product: 'four topping hot food',
            codeActive: false,
        },
        { code: '640 013', product: 'chiken wings(small)', codeActive: false },
        {
            code: '640 014',
            product: 'chiken wings(large)',
            codeActive: false,
            message:
                'give them around 14wings if the tub is not filled up then add some more',
        },
        {
            code: '640 005',
            product: 'cup container',
            codeActive: false,
            message: '',
        },
        { code: '640 006', product: 'rice', codeActive: false, message: '' },
        {
            code: '640 008',
            product: 'glass noodles',
            codeActive: false,
            message: '',
        },

        {
            code: '400 017',
            product: 'chop sticks',
            codeActive: false,
            message: 'for hot food people free, for not hot food people, 10p',
        },
    ];
    const [codes, setCodes] = useState(arr);
    console.log(['@@codes'], codes);
    return (
        <Slider {...settings}>
            {codes.map((item, key) => {
                return (
                    <div key={key}>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => {
                                const index = key;
                                return setCodes(
                                    codes.map((n, i) => {
                                        if (index === i) {
                                            n.codeActive = !n.codeActive;
                                        }
                                        return n;
                                    })
                                );
                            }}
                        >
                            {item.image && (
                                <div style={{ width: '300px' }}>
                                    <img
                                        style={{ width: '100%' }}
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            )}
                            <span>code: </span>{' '}
                            <span
                                style={{
                                    color: item.codeActive
                                        ? 'red'
                                        : 'transparent',
                                }}
                            >
                                {item.code}
                            </span>
                        </div>
                        <div>
                            <span>product: </span> <span>{item.product}</span>
                        </div>
                        <div>
                            <span></span> <br />
                            <span>message: {item.message && item.message}</span>
                        </div>
                        <br />
                    </div>
                );
            })}
        </Slider>
    );
}

const ProductsQuizContainerBlock = styled.div`
    padding: 0 40px;
`;

function ProductsQuizContainer({ children }) {
    return (
        <ProductsQuizContainerBlock>
            <MemoriseJob />
        </ProductsQuizContainerBlock>
    );
}

export default ProductsQuizContainer;
