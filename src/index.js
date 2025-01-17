import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";
import createQrCode from "./service/qrcode/create.js";
import createPassword from "./service/password/create.js";

async function Main() {
    prompt.get(mainPrompt, async (err, result) => {
        if(result.select == 1) await createQrCode();
        if(result.select == 2) await createPassword();
    })
}

Main();