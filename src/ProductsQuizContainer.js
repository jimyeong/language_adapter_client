import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

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
        { code: '710 168', product: 'plastic bag(small)', codeActive: false },
        { code: '710 326', product: 'plastic bag(large)', codeActive: false },
        { code: '600 001', product: 'chinese leaf', codeActive: false },
        { code: '600 002', product: 'radish', codeActive: false },
        { code: '600 003', product: 'cucumber', codeActive: false },
        { code: '600 005', product: 'spinach', codeActive: false },
        { code: '600 012', product: 'oyster mushroom', codeActive: false },
        { code: '600 017', product: 'garlic(large)', codeActive: false },
        { code: '600 018', product: 'garlic(large)', codeActive: false },
        { code: '600 019', product: 'ginger', codeActive: false },
        { code: '600 020', product: 'spring onion', codeActive: false },
        {
            code: '600 023',
            product: 'kow choi(chinese chives)',
            codeActive: false,
        },
        { code: '600 026', product: 'green pumpkin', codeActive: false },
        { code: '600 101', product: 'spring onion (long)', codeActive: false },
        { code: '600 597', product: 'lemon grass', codeActive: false },
        { code: '600 602', product: 'coriander', codeActive: false },
        { code: '600 605', product: 'garlic stem', codeActive: false },
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
