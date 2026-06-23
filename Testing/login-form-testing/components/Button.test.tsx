
import { render, screen } from "@testing-library/react";
import Button from "./Button";

/* 

Vitest starts test
        ↓
test() registers test case
        ↓
render() creates testing virtual DOM
        ↓
React renders Button component
        ↓
JSDOM creates fake browser DOM
        ↓
screen.getByText() searches DOM
        ↓
expect() verifies result
        ↓
Vitest marks test pass/fail

*/

test('render button text', () => {
    render(<Button title="Submit" />);

    expect(
        screen.getByText('Submit')
    ).toBeInTheDocument() // toBeInTheDocument comes from jest-dom : jest-dom is a library that gives you extra DOM-specific matchers for testing UI components.


    /* 
        This error happens because TypeScript does not know about the custom matcher:
        from @testing-library/jest-dom.


        jest-dom gives us feature to check by using custom this :
        toBeInTheDocument()
        toHaveTextContent()
        toBeDisabled()
        toBeVisible()
        toHaveClass()
        toHaveValue()
    */
})