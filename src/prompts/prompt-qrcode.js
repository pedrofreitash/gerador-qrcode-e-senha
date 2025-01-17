import prompt from "prompt";
import chalk from "chalk";

const qrcodePrompt = [
    {
        name: "link",
        description: chalk.bgCyan("Informe o link para gerar o QRCode"),
        require: true,
    },
    {
        name: "type",
        description: chalk.bgYellow("Escolha o tipo (1 - Imagem ou 2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        require: true,
    }
];

export default qrcodePrompt;