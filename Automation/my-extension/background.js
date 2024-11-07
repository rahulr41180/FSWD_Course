
chrome.action.onClicked.addListener((tab) => {


    console.log('tab-bg1:', tab)

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: async () => {
            // Your Puppeteer script goes here
           
        }
    });
});
