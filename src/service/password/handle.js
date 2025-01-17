import permittedChar from "./utils/permitted-char.js";

async function handle() {
    let char = [];
    let password ="";

    const passwordLenght = process.env.PASSWORD_LENGTH;
    char = await permittedChar();
    

    for (let i = 0; i < passwordLenght; i++){
        const index = Math.floor(Math.random() * char.length);

        password += char[index];
    }
    return password;
}

export default handle;