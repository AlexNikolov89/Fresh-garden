import styled from 'styled-components'
import {theme} from "./index";

export const ExternalContainerLoader = styled.div`
    display: flex;
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    position: absolute;
    top: calc(240px + ${theme.controlHeightXL});
    background: ${theme.colorBackgroundColor};
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`;

export const Loader = styled.div`    
    background: transparent;
    z-index: 43;
    opacity: 0.2;

    &#loader {
        font-size: 8px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #0a0a0a;
        background: -moz-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
        background: -webkit-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
        background: -o-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
        background: -ms-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
        background: linear-gradient(to right, #0a0a0a 10%, white 42%);
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    &#loader:before {
        width: 50%;
        height: 50%;
        background: #0a0a0a;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    &#loader:after {
        background: white;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

`

