
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    top: 80px;
    height: 320px;
    width: 350px;
    margin: auto;
    background-color: #a2e9d8;
    border-radius: 5px;
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    flex-direction: column;
    .logoName {
        text-align: center;
        margin: 0;
        font-size: 24px;
        text-decoration: underline;
    }
    form {

        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 5px;
        input {
            border-radius: 5px;
            height: 22px;
            padding: 5px 15px;
            border: 1px solid;
            font-size: 15px;
        }
        select {
            border-radius: 5px;
            height: 32px;
            padding: 5px 10px;
            border: 1px solid;
            font-size: 15px;
        }
        button {
            border-radius: 5px;
            height: 22px;
            padding: 18px 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            font-weight: 800;
            background-color: #3c284a;
            color: #ffffff;
            cursor: pointer;
            &:hover {
                color: #3c284a;
                background-color: #ffffff;
                transition: 800ms;
            }
        }
    }
`