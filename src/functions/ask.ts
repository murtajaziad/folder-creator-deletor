import { ask, write } from 'console-read-write';
import { createFolder } from './createFolder'
import { deleteFolder } from './deleteFolder'

export async function askQuestion() {
    await ask("Do you want to create or delete a folder? (c = create/d = delete)")
        .then(anwser => {
            if (anwser == "c") createFolder()
            else if (anwser == "d") deleteFolder()
            else[write("Please choose a vaild option, Exiting..."), process.exit()]
        })
}