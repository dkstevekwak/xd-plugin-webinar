const { selection } = require("scenegraph");
let dialog;

function enlargeRectangle() {
    const html = `
        <style>
            .break {
                flex-wrap: wrap;
            }
            label.row > span {
                color: #8E8E8E;
                width: 20px;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
            form {
                width:90%;
                margin: -20px;
                padding: 0px;
            }
        </style>
        <form method="dialog" id="main">
            <div class="row break">
                <label class="row">
                    <span>↕︎</span>
                    <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Height" />
                </label>
                <label class="row">
                    <span>↔︎</span>
                    <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Width" />
                </label>
            </div>
            <footer>
                <button id="ok" type="submit" uxp-variant="cta">Apply</button>
            </footer>
        </form>
        `;
    function exec() {
        const height = Number(document.querySelector("#txtV").value);
        const width = Number(document.querySelector("#txtH").value);
        const selectedRectangle = selection.items[0];
        selectedRectangle.width += width;
        selectedRectangle.height += height;
    }
    if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.innerHTML = html;
        document.appendChild(dialog);
        document.querySelector("form").addEventListener("submit", exec);
    }
    return dialog.showModal();
}

module.exports = {
    commands: {
        enlargeRectangle
    }
};