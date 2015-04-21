var socket = io("http://ficc-heavensdoor.herokuapp.com");

socket.on("update", function(data) {
  console.log("updated!: ", data);
  changeIcon(data);
});

fetch("http://ficc-heavensdoor.herokuapp.com/params").then(function(res) {
  return res.json();
}).then(function(data) {
  console.log("fetched!: ", data);
  changeIcon(data.value);
});

var changeIcon = function(flag) {
  var isOpened = (flag === 1);

  if (isOpened) {
    chrome.browserAction.setIcon({ path: "images/opened.jpg" });
  } else {
    chrome.browserAction.setIcon({ path: "images/closed.jpg" });
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ "url": "http://ficc-heavensdoor.herokuapp.com" });
});
