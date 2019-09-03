import { ask, write } from 'console-read-write';
import { existsSync, rmdirSync } from 'fs';
import { join } from 'path';

export async function deleteFolder() {
    await ask("What's the name of the folder that you want to delete it?")
        .then(async name => {
            if (existsSync(join(__dirname, '..', name.toString()))) {
                await rmdirSync(join(__dirname, '..', name.toString()))
                await write("Done, I'm exiting now :)")
                await process.exit()
            } else
                await write("I didn\'t find this folder, Exiting ×_×")
            await process.exit()
        })
}
