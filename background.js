function clickButton() {
  document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(1)").click();
  console.log("button clicked");
}

chrome.scripting.executeScript({
  target: {tabId: tab.id},
  function: clickButton
});

chrome.x.onClicked.addListener((tab) => {

};

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        //active_tab_id = tab.tabId;

        if (/^https:\/\/www\.grailed\.com\/internal\/flags\/conversation_flags/.test(current_tab_info.url)) {
          chrome.tabs.insertCSS(null, {file: './highlight.css'});
          chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log("injected"))
        }
    });
});
//chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=>console.log("INJECTED"));
