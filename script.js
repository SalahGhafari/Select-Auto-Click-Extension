document.addEventListener("keydown", (event) => {
    if (event.altKey && event.detail === 2) {
        // Get the selected text
        let selectedText = window.getSelection().toString();
        // Check if the selected text matches the desired phrase
        if(selectedText === "the desired phrase") {
            // Get all the elements that contain the selected text
            let elements = document.querySelectorAll(`:contains(${selectedText})`);
            // Iterate over the elements
            elements.forEach(function(element){
                // Click on the element
                element.click();
            });
        }
    }
});
