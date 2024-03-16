
/* 

export const Input = (props) => {

    return (
        <>
            <input type={props.type} ref={props.refType} />
        </>
    )
}
*/

// import { forwardRef } from "react"

/*
export const Input = forwardRef((props) => {

    return (
        <>
            <input type={props.type} />
        </>

    )
})
*/

// import { useRef } from "react";

/*
export const Input = forwardRef((props) => {
    const inputRef = useRef();

    const customFocus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input type={props.type}  ref={inputRef} />
        </>
    )

})
*/

import { forwardRef, useRef, useImperativeHandle } from "react";

export const Input = forwardRef((props, ref) => {
    const inputRef = useRef();
    
    useImperativeHandle(ref, () => {

        return {onfocus : customFocus}
    })

    function customFocus() {
        inputRef.current.focus();
    }

    return (
        <>

            <input type={props.type}  ref={inputRef} />
        </>
    )
})