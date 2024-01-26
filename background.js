const API_URL = "https://api.pokemontcg.io/v2/";

const idExceptions = {
  SVI: "sv1",
  PAL: "sv2",
  OBF: "sv3",
  MEW: "sv3pt5",
  CEL: "cel25",
  PAR: "sv4",
  PAF: "sv4pt5",
};

browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "download") {
    const ptcgoCode = message.ptcgoCode;
    let [set, number] = ptcgoCode.split(" ");
    number = getSubsettedNumber(set, number);
    let fullUrl;
    if (set in idExceptions) {
      fullUrl = `${API_URL}cards?q=set.id:${idExceptions[set]}%20number:${number}`;
    } else {
      fullUrl = `${API_URL}cards?q=set.ptcgoCode:${set}%20number:${number}`;
    }
    const response = await fetch(fullUrl);
    const data = await response.json();

    if (data.data.length > 0) {
      return Promise.resolve({ status: 0, image: data.data[0].images.small });
    } else {
      return Promise.resolve({ status: 1 });
    }
  }
});

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(tab.id, { action: "scanAndHighlight" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(sendMessageToTabs);
});
