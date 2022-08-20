import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Thin'), url(../assets/fonts/NotoSansKR-Thin.otf) format("otf");
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Light'), url(../assets/fonts/NotoSansKR-Light.otf) format("otf");
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Regular'), url(../assets/fonts/NotoSansKR-Regular.otf) format("otf");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Medium'), url(../assets/fonts/NotoSansKR-Medium.otf) format("otf");
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Bold'), url(../assets/fonts/NotoSansKR-Bold.otf) format("otf");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'noto-sans-cjk-kr';
        src: local('NotoSansKR-Black'), url(../assets/fonts/NotoSansKR-Black.otf) format("otf");
        font-weight: 900;
        font-style: normal;
    }

    // utils
    .col-ctr{
        display:flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
    .tar{text-align:right;}
    .tal{text-align:left;}
    .tac{text-align:center;}
    .dib{display:inline-block};
    .db{display:block};
    .dn{display:none};
    .mt10{margin-top:10px};
    .page-title {
        font-size: 20px;
        font-weight: bold;
        color: #737373;
        margin: 0px 0px 40px;
    }
    .page-title.with-header {
        margin-top: 20px;
    }
    .screen{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:800;
        background-color: rgba(0,0,0,0.7);
    }
    body, html{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        font-family: 'noto-sans-cjk-kr', 'Roboto',  sans-serif;
        color: #717171;
        background-color: #dfdfdf;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    #root{
        min-height: 100%;
        position: relative;
    }
    .footer{
        position: absolute;
        left:0;
        right:0;
        bottom: 0;
        height:40px;
    }
    img {
        width: 100%;
    }
`;

export default GlobalStyle;
