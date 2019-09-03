import { ask, write } from 'console-read-write';
import { mkdirSync } from 'fs';
import { join } from 'path';

export async function createFolder() {
    await ask("What's the name of the new folder?")
        .then(name => {
            mkdirSync(join(__dirname, '..', name.toString()))
        });
    await write("Done, I'm exiting now :)");
    await process.exit();
}
