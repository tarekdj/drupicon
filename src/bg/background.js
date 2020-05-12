chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            code: 'document.querySelector(\'link[rel*="icon"]\').href = "//raw.githubusercontent.com/tarekdj/drupicon/master/icons/icon128.png"'
        });
    }
});