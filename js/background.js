chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                // When a page contains a <video> tag...
                new chrome.declarativeContent.PageStateMatcher({
                    css: ["section"]
                })
            ],
            // ... show the page action.
            actions: [new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
    console.log(chrome);
});
