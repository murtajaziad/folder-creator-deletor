"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_read_write_1 = require("console-read-write");
const fs_1 = require("fs");
const path_1 = require("path");
async function createFolder() {
    await console_read_write_1.ask("What's the name of the new folder?")
        .then(name => {
        fs_1.mkdirSync(path_1.join(__dirname, '..', name.toString()));
    });
    await console_read_write_1.write("Done, I'm exiting now :)");
    await process.exit();
}
exports.createFolder = createFolder;
