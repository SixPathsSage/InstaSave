chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    load(request)
    sendResponse()
})

function load(url) {

    if (url != null) {
        url = url + "?__a=1"
    }

    fetch(url).then(data => data.json()).then(data => send(data));
}

function send(data) {
    fetch('http://localhost:3001/api/data', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}