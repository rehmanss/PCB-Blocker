chrome.webRequest.onBeforeRequest.addListener(
    function (details) {

         console.log(details);

        /**
         * redirect hanya jenis `main_frame`
         */
        if (details.type == "main_frame")
            chrome.tabs.update(details.tabId, {
                url: details.url.substring(details.url.indexOf('&a=') + 3)
            })

        /**
         * selebihnya block semua request
         */
        return {
            cancel: true
        };

    }, {
        urls: ["*://www.ebay.co.uk/*", "*://www.ebay.com/*", "*://www.amazon.co.uk/*"]
        
        
    }, ["blocking"]
);

// console.log('Extension initiated.');