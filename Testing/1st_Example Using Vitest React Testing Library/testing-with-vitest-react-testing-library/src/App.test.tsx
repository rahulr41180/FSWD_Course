
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

// describe is a suit or group to multi test cases which help to test the one component
describe("App Component Test Suits", () => {
    // it here use to give meaning full sence for test runner.
    it("should render the app with correct initial state", () => {
        render(<App />) 
        // to print the dom in the app component we can use

        // if we want to pick specific element or node from dom than we have to pass some element instead of undefined but we have
        // passed the undefined that means it will pick complete DOM
        screen.debug(undefined, 10000000)
    });

    // to skip the test cases
    it.skip("should render the app with correct initial state", () => {
        render(<App />)
        // to print the dom in the app component we can use

        // if we want to pick specific element or node from dom than we have to pass some element instead of undefined but we have
        // passed the undefined that means it will pick complete DOM
        screen.debug(undefined, 10000000)
    });

    it("should render the app name", () => {
        // This will render our app component
        render(<App name="learn testing in react" />)

        // to test out the heading first we need to grap the element to grap the element we need screen method
        const heading = screen.getByText("learn testing in react");
        // assertion that the heading should present in the DOM
        expect(heading).toBeDefined();
    })

    // if we want to run only this test cases than we have only method
    it.only("should only render the app name", () => {
        // This will render our app component
        render(<App name="learn testing in react" />)

        // to test out the heading first we need to grap the element to grap the element we need screen method
        const heading = screen.getByText("learn testing in react");
        screen.debug(undefined, 10000000)
        // assertion that the heading should present in the DOM
        expect(heading).toBeDefined();
    })

    // There are three way to pick element from virtual DOM into testing enviornment which ways are offered from react testing library.

    /* 
        getBy -> Throw error if not found | if something should be present in DOM so to check that by getBy Method
        getByText | getByPlaceholders | getByAltText | getByLabelText | getByRole
        queryBy -> Returns null if not found | if something should or should not be present in DOM so to check by using queryBy
        queryByText | queryByPlaceholders | queryByAltText | queryByLabelText | queryByRole
        findBy -> For async elements | if we test the element which coming after async operation or element is checking asynchronously
        and we have to use await before testing some element by using findBy
        like: await findByText | await findByPlaceholders | await findByAltText | await findByLabelText | await findByRole

        if we have to test one text then we have byText means getByText | queryByText | findByText
        if we have to test more then one text then we have allByText means getByAllText | queryByAllText | findByAllText
    */
})