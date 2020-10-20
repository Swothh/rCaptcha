//||===---===---===---===---[===]---===---===---===---===||\\

const Canvas = require('canvas');
const lang = require('./lang.json')
const error = lang.errors

//||===---===---===---===---[===]---===---===---===---===||\\

class rCaptcha {
  constructor(rCaptcha) {

//||===---===---===---===---[===]---===---===---===---===||\\

    const language = rCaptcha["language"] || rCaptcha["dil"] || null
		const difficulty = rCaptcha["difficulty"] || rCaptcha["zorluk"] || null
		const length = rCaptcha["length"] || rCaptcha["uzunluk"] || null
    const difficulties = ["KOLAY", "ORTA", "ZOR", "ÇOKZOR", "EASY", "MEDIUM", "HARD", "VERYHARD"];
    const level_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const level_2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const level_3 = "01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const level_4 = "!+#>-<@&%01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//||===---===---===---===---[===]---===---===---===---===||\\

    if (!language) throw new Error(error.tr.err1 + '\n' + error.en.err1);
    if (!["EN", "TR"].includes(language)) throw new Error(language == "TR" ? error.tr.err2 : error.en.err2);
    if (!difficulty) throw new Error(language === "TR" ? error.tr.err3 : error.en.err3);
    if (!difficulties.includes(difficulty)) throw new Error(language === "TR" ? error.tr.err4 : error.en.err4);
    if (!length) throw new Error(language === "TR" ? error.tr.err5 : error.en.err5);
    if (isNaN(length)) throw new Error(language === "TR" ? error.tr.err6 : error.en.err6);
    if (length < 4 || length > 12) throw new Error(language === "TR" ? error.tr.err7 : error.en.err7)

//||===---===---===---===---[===]---===---===---===---===||\\

    const karakterler = ["KOLAY", "EASY"].includes(difficulty) ? level_1 : ["ORTA", "MEDIUM"].includes(difficulty) ? level_2 : ["ZOR", "HARD"].includes(difficulty) ? level_3 : level_4
    const rCaptchaŞifre = Array(length).fill(karakterler).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    const canvas = Canvas.createCanvas(900, 300);
    const ctx = canvas.getContext('2d');

//||===---===---===---===---[===]---===---===---===---===||\\

    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.font = length >= 10 ? '900 100px Nunito' : length <= 6 ? '900 160px Nunito' : '900 140px Nunito';
    ctx.lineWidth = 5;
    ctx.fillText(rCaptchaŞifre, canvas.width / 2, canvas.height / 1.7);
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(rCaptchaŞifre, canvas.width / 2, canvas.height / 1.7);

    /*async function rCaptchaArkaplan() {
      await Canvas.loadImage("https://i.hizliresim.com/OKYHJl.png").then((image) => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      });
    }; rCaptchaArkaplan();*/

//||===---===---===---===---[===]---===---===---===---===||\\

    const rCaptchaYanıt_TR = {
      dil: language,
      zorluk: difficulty,
      uzunluk: length,
      kod: rCaptchaŞifre,
      resim: {
        url: canvas.toDataURL(),
        buffer: canvas.toBuffer()
      }
    }

    const rCaptchaYanıt_EN = {
      language: language,
      difficulty: difficulty,
      length: length,
      code: rCaptchaŞifre,
      image: {
        url: canvas.toDataURL(),
        buffer: canvas.toBuffer()
      }
    }

//||===---===---===---===---[===]---===---===---===---===||\\

    const rCaptchaYanıt = language === "TR" ? rCaptchaYanıt_TR : rCaptchaYanıt_EN
    return rCaptchaYanıt;

//||===---===---===---===---[===]---===---===---===---===||\\

    }
  }

//||===---===---===---===---[===]---===---===---===---===||\\

module.exports = rCaptcha;
module.exports.version = require("./package.json").version;

//||===---===---===---===---[===]---===---===---===---===||\\
