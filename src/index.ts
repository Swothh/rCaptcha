import { IrCaptcha } from "./interfaces";
import Canvas from 'canvas';

export class rCaptcha implements IrCaptcha {
    public difficulty: IrCaptcha['difficulty'];
    public length: IrCaptcha['length'];
    public captcha?: IrCaptcha['captcha'];
    constructor(rCaptcha: IrCaptcha) {
        this.difficulty = rCaptcha.difficulty;
        this.length = rCaptcha.length;
        this.captcha = rCaptcha.captcha;
    };

    public async generate() {
        if (this.length < 5) throw new Error('Length must be greater than 5.');
        if (this.length > 10) throw new Error('Length must be less than 10');

        let captcha = generateCaptcha(this.difficulty, this.length);

        if (this.captcha?.backgroundImage) {
            let canvas = Canvas.createCanvas(900, 300);
            let ctx = canvas.getContext('2d');

            let image = await Canvas.loadImage(this.captcha.backgroundImage);
            if (!image) throw new Error('Image not found.');
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            ctx.textAlign = "center";
            ctx.font = '900 100px Sans-Serif';
            ctx.lineWidth = 5;
            ctx.fillStyle = this.captcha?.textColor || '#000000';
            ctx.fillText(captcha, canvas.width / 2, canvas.height / 1.7);
            ctx.strokeStyle = this.captcha?.strokeColor || '#ffffff';
            ctx.strokeText(captcha, canvas.width / 2, canvas.height / 1.7);

            let response = canvas.toDataURL();
            let buffer = canvas.toBuffer();
            return response
        } else {
            const canvas = Canvas.createCanvas(900, 300);
            const ctx = canvas.getContext('2d');
            ctx.textAlign = "center";
            ctx.font = '900 100px Sans-Serif';
            ctx.lineWidth = 5;
            ctx.fillStyle = this.captcha?.backgroundColor || '#E0E0E0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = this.captcha?.textColor || '#000000';
            ctx.fillText(captcha, canvas.width / 2, canvas.height / 1.7);
            ctx.strokeStyle = this.captcha?.strokeColor || '#ffffff';
            ctx.strokeText(captcha, canvas.width / 2, canvas.height / 1.7);
            let response = canvas.toDataURL();
            let buffer = canvas.toBuffer();
            return response /*{
                text: captcha,
                difficulty: this.difficulty,
                length: this.length,
                response: {
                    dataURL: response,
                    buffer: buffer
                }
            }*/
        }
    };
};

function generateCaptcha(difficulty: 'KOLAY' | 'ORTA' | 'ZOR' | 'ÇOKZOR' | 'EASY' | 'MEDIUM' | 'HARD' | 'VERYHARD', length: number): string {
    let keywords;
    switch (difficulty) {
        case 'KOLAY':
            keywords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'ORTA':
            keywords = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'ZOR':
            keywords = "01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'ÇOKZOR':
            keywords = "!+#>-<@&%01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'EASY':
            keywords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'MEDIUM':
            keywords = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'HARD':
            keywords = "01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'VERYHARD':
            keywords = "!+#>-<@&%01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        default:
            keywords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
    };

    let captcha = '';
    for (let i = 0; i < length; i++) {
        captcha += keywords.charAt(Math.floor(Math.random() * keywords.length));
    };
    return captcha;
};