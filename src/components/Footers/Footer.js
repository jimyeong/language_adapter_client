import React from 'react';
import styled from 'styled-components';
import { CIRCLEFRAME } from '../Utils';

const FooterBlock = styled.footer`
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #e9f3fb;
    border-radius: 15px 15px 0 0;
    box-shadow: 1px 1px 2px 5px rgb(0 0 0 / 1%);
    .user__profile {
        position: relative;
    }
    .position_center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .position_vertical_center {
        top: 50%;
        transform: translateY(-50%);
    }
    .position_horizontal_center {
        left: 50%;
        transform: translateX(-50%);
    }
`;
//
/*
avartar: "https://lh3.googleusercontent.com/a-/AFdZucpUvSD8reR4hWintJtRjyXDSZAd5jqNXaBCTOew_A=s96-c"
createdAt: "2022-08-03T10:16:56.000Z"
email: "idjjm92@gmail.com"
id: 1
name: "정지명"
snsId: null
updatedAt: "2022-08-03T10:16:56.000Z"
*/
function Footer({ children, user_profile }) {
    return (
        <FooterBlock>
            <div className="user__profile">
                <CIRCLEFRAME className="position_center" size={44}>
                    <img
                        referrerPolicy="no-referrer"
                        src={user_profile.avartar}
                        alt="user_avartar"
                    />
                </CIRCLEFRAME>
            </div>
        </FooterBlock>
    );
}

export default Footer;
