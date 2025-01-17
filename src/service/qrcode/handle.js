import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err){
        console.log(chalk.bgRed("erro na aplicação"));
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.bgGreen("QRCode gerado com sucesso!!!\n"));
        console.log(qrcode);
    })
}

export default handle;