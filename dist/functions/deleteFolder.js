"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_read_write_1 = require("console-read-write");
const fs_1 = require("fs");
const path_1 = require("path");
async function deleteFolder() {
    await console_read_write_1.ask("What's the name of the folder that you want to delete it?")
        .then(async (name) => {
        if (fs_1.existsSync(path_1.join(__dirname, '..', name.toString()))) {
            await fs_1.rmdirSync(path_1.join(__dirname, '..', name.toString()));
            await console_read_write_1.write("Done, I'm exiting now :)");
            await process.exit();
        }
        else
            await console_read_write_1.write("I didn\'t find this folder, Exiting ×_×");
        await process.exit();
    });
}
exports.deleteFolder = deleteFolder;
