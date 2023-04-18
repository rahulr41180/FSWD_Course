
import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    background-color: #49bda2;
    height: 55px;
    border: 1px solid;
`
export const Logo = styled.div`
    border: 1px solid;
    height: 45px;
    display: flex;
    position: relative;
    left: 10px;
    right: 0px;
    width: 140px;
    top: 5px;

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;

    }
`
export const SingIn = styled.div`
    border: 1px solid;
    background-color: #3c284a;

    position: absolute;
    right: 10px;
    height: 45px;
    width: 100px;
    top: 5px;
    display: flex;
    padding: 0;

    button {
        width: 100%;
        background-color: #3c284a;
        outline: 0;
        border: 0;
        height: 100%;
        color: white;
        font-weight: 600;
        cursor: pointer;
        font-size: 18px;
        padding: 0;
        a {
            color: #ffffff;
            text-decoration: none;

            background-color: #3c284a;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                background-color: #ffffff;
                color: #3c284a;
                transition: 700ms;
            }
        }
    }
`
export const LogIn = styled.div`
    border: 1px solid;
    background-color: #3c284a;
    position: absolute;

    right: ${(props) => props.page === "signIn" ? "10px" : "120px"};
    height: 45px;
    width: 100px;
    top: 5px;
    display: flex;
    button {
        width: 100%;
        background-color: #3c284a;
        outline: 0;
        border: 0;
        height: 100%;
        color: white;
        font-weight: 600;
        cursor: pointer;
        font-size: 18px;
        padding: 0;
        a {
            color: #ffffff;
            text-decoration: none;

            background-color: #3c284a;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                background-color: #ffffff;
                color: #3c284a;
                transition: 800ms;
            }
        }
    }
`