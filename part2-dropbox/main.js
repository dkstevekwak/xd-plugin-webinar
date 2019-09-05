/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { selection, Text, Color } = require("scenegraph");
const config = require("./config.json");
const URL = config.URL;
const accessToken = config.accessToken;
let dialog;

async function getDropboxProfile() {
    return createUI();
}

async function createUI() {
    if (!dialog) {
        dialog = document.createElement("dialog");
        const html = `
        <style>
            title {
                display: block;
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
            }
        </style>
        <form method="dialog" id="main">
            <div class="title"> Dropbox API </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Get Profile</button></footer>
        </form>
        `;
        dialog.innerHTML = html;
        document.appendChild(dialog);
        document.querySelector("form").addEventListener("submit", async e => {
            e.preventDefault();
            await populateProfile();
        });
    }
    return dialog.showModal();
}

async function populateProfile() {
    const response = await getProfile();

    const text = new Text();
    text.text = JSON.stringify(response);
    text.styleRanges = [{
        length: text.text.length,
        fill: new Color("#FF0000"),
        fontSize: 50
    }];

    selection.insertionParent.addChild(text);
    text.moveInParentCoordinates(600, 600);

    dialog.close();
}

async function getProfile() {
    const tokenResponse = await fetch(`https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer%20${accessToken}`, {
        method: "POST"
    })
    const token = await tokenResponse.json();
    return token;
}

module.exports = {
    commands: {
        myPluginCommand: getDropboxProfile
    }
};
