
import { render, screen } from "@testing-library/react";
import App from "./App"

test("renders welcome message", () => {
    render(<App />);

    // using custom matcher from jest-dom
    const heading = screen.getByText(/vite1 +\ react/i);
    expect(heading).toBeInTheDocument();
})