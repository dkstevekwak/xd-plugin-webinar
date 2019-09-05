function show(event) {
    // your code here
    console.log("plugin opened");
}

function hide(event) {
    // your code here
    console.log("plugin closed");
}

function update(selection) {
    // your code here
    console.log("selection changed or something modified")
}

module.exports = {
    panels: {
        enlargeRectangle: {
            show,
            hide,
            update
        }
    }
};