chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "https://www.facebook.com/thaiquang.hoang/"});
});
