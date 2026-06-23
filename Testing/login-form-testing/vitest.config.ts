
import { defineConfig } from 'vitest/config'; 
import react from '@vitejs/plugin-react'; 

export default defineConfig({ 
    plugins: [react()], 
    test: { 
        /* 
            globals: true
            Allows you to write:
            test()
            expect()
            describe()
            without importing from Vitest.

            Otherwise you must do:
            import { test, expect } from 'vitest'
        */
        globals: true, 
        /* 
            React components need browser APIs like:
            document
            window
            HTMLElement
            document
            window
            HTMLElement

            jsdom creates a fake browser environment.

            Without it:
            document is not defined
            error comes.

            Yes — in a real frontend application running in the browser, you already have:

            window
            document
            HTMLElement

            available automatically.

            BUT during testing with Vitest, your tests run inside Node.js, not inside Chrome/Browser.

            -----------------------------------------

            Real Frontend Runtime

            When user opens your app in browser:

            Chrome/Firefox/Edge

            Browser provides:

            DOM
            window
            document
            localStorage
            HTMLElement

            So React works normally.

            -------------------------------

            But Tests Run in Node.js

            Vitest/Jest run in:

            Node.js environment

            Node.js does NOT have:

            document
            window
            DOM APIs

            So this fails:

            render(<Button />)

            because React Testing Library internally uses DOM.

        */
        environment: 'jsdom', 
        setupFiles: './setupTests.ts', 
    }, 
})