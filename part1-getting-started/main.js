const commands = require("commands");
const { selection } = require("scenegraph");

function createCustomBanner() {
    const width = 800;
    const height = 400;

    commands.duplicate()
    const duplicated = selection.items[0];

    duplicated.resize(width, height);
    duplicated.moveInParentCoordinates(600, 600);
}

module.exports = {
    commands: {
        createCustomBanner
    }
};
