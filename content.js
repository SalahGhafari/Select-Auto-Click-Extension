// Function to click all occurrences of a specific phrase
function clickAll(phrase) {
    // Find all elements containing the specific phrase
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3 && node.textContent.includes(phrase)) {
                var parentElement = node.parentNode;
                parentElement.dispatchEvent(new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            }
        }
    }
}

// Register event listeners for alt + double click and alt + select
document.addEventListener("dblclick", function(e) {
    if (e.altKey) {
        var selectedText = window.getSelection().toString();
        clickAll(selectedText);
    }
});
document.addEventListener("mouseup", function(e) {
    if (e.altKey) {
        var selectedText = window.getSelection().toString();
        clickAll(selectedText);
    }
});

// listen for message from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            var selectedText = window.getSelection().toString();
            clickAll(selectedText);
        }
    }
);
