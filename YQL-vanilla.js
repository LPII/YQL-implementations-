//Vanilla JS implementation that injects script with proper attributes

//Appends script to head
function appendScript(url) {
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
}
//Method called by appended script that determines what to do with response
function handleResponse(response) {
    //Log response for now
    console.log(response);
}
//Change url to encoded feed url
document.addEventListener("DOMContentLoaded", function () {
    var url = 'url';
    var concatFeedUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D" + url + "%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse";
    appendScript(concatFeedUrl);
}, false);