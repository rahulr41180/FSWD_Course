
document.getElementById('runScript').addEventListener('click', () => {


    console.log('Hello World2');
    // Get the active tab information
    console.log('chrome:', chrome.tabs.query)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log('tabs:', tabs)
        if (tabs[0]) {
            const tabId = tabs[0].id;

            // Execute a Puppeteer script in the active tab
            
            console.log('chrome:', chrome)
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: () => {
                    console.log('Hello World');
                }
            });
        } else {
            console.error('Error: No active tab found.');
        }
    });
});
