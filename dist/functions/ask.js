"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_read_write_1 = require("console-read-write");
const createFolder_1 = require("./createFolder");
const deleteFolder_1 = require("./deleteFolder");
async function askQuestion() {
    await console_read_write_1.ask("Do you want to create or delete a folder? (c = create/d = delete)")
        .then(anwser => {
        if (anwser == "c")
            createFolder_1.createFolder();
        else if (anwser == "d")
            deleteFolder_1.deleteFolder();
        else
            [console_read_write_1.write("Please choose a vaild option, Exiting..."), process.exit()];
    });
}
exports.askQuestion = askQuestion;
