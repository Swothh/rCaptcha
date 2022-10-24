"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Captcha = void 0;
const canvas_1 = __importDefault(require("canvas"));
class Captcha {
    difficulty;
    length;
    captcha;
    keywords;
    constructor(rCaptcha) {
        this.difficulty = rCaptcha.difficulty;
        this.length = rCaptcha.length;
        this.captcha = rCaptcha.captcha;
        this.keywords = rCaptcha.keywords;
    }
    ;
    async generate() {
        if (this.length < 5)
            throw new Error('Length must be greater than 5.');
        if (this.length > 10)
            throw new Error('Length must be less than 10');
        if (this.keywords && this.keywords.length < 5)
            throw new Error('Keywords must be greater than 5.');
        let captcha = generateCaptcha(this.difficulty, this.length, this.keywords);
        if (this.captcha?.backgroundImage) {
            let canvas = canvas_1.default.createCanvas(900, 300);
            let ctx = canvas.getContext('2d');
            let image = await canvas_1.default.loadImage(this.captcha.backgroundImage);
            if (!image)
                throw new Error('Image not found.');
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
            return {
                text: captcha,
                keywords: this.keywords ?? null,
                difficulty: this.difficulty,
                length: this.length,
                response: {
                    dataURL: response,
                    buffer: buffer
                }
            };
        }
        else {
            const canvas = canvas_1.default.createCanvas(900, 300);
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
            return {
                text: captcha,
                keywords: this.keywords ?? null,
                difficulty: this.difficulty,
                length: this.length,
                response: {
                    dataURL: response,
                    buffer: buffer
                }
            };
        }
    }
    ;
}
exports.Captcha = Captcha;
;
function generateCaptcha(difficulty, length, isCustomKeywords) {
    let keywords;
    if (isCustomKeywords) {
        keywords = isCustomKeywords;
        let captcha = '';
        for (let i = 0; i < length; i++) {
            captcha += keywords.charAt(Math.floor(Math.random() * keywords.length));
        }
        ;
        return captcha;
    }
    else {
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
        }
        ;
        let captcha = '';
        for (let i = 0; i < length; i++) {
            captcha += keywords.charAt(Math.floor(Math.random() * keywords.length));
        }
        ;
        return captcha;
    }
}
;
