//||===---===---===---===---[===]---===---===---===---===||\\

const Canvas = require('canvas');
const child_process = require('child_process');
const lang = require('./lang.json');
const request = require('getweb');
const error = lang.errors


class rCaptcha {
  constructor(rCaptcha) {

//||===---===---===---===---[===]---===---===---===---===||\\

const roaliaVersion = request.get('https://registry.npmjs.org/rcaptcha');
const roaliaJson = JSON.parse(roaliaVersion.body);
const sonVer = roaliaJson['dist-tags'].latest;
const kulVer = require('../package.json').version
if(kulVer !== sonVer) {
   function bir() {console.log(' [==>]      %10')}
   function iki() {console.log(' [====>]      %20')}
   function uc() {console.log(' [=====>]     %40')}
   function dort() {console.log(' [======>]      %60')}
   function bes() {console.log(' [========>]     %80')}
   function altı() {console.log(' [=========>]     %100')}
   function control() {console.log('Güncelleme Tespit Edildi.')}
   function download() {console.log('Dosyalar İndiriliyor...')}
   function güncelle() {
   const up = child_process.exec(`npm install rcaptcha`, function (error, stdout, stderr) {
      if (error) throw error;
      console.log('Güncelleme Başarılı lütfen tekrar başlatınız.')
    });
   }

   setTimeout(control, 1000);
   setTimeout(download, 2000);
   setTimeout(bir, 3000);
   setTimeout(iki, 4000);
   setTimeout(uc, 5000);
   setTimeout(dort, 6000);
   setTimeout(bes, 7000);
   setTimeout(altı, 8000);
   setTimeout(güncelle, 10000);
}

//||===---===---===---===---[===]---===---===---===---===||\\

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
module.exports.version = require("../package.json").version;

//||===---===---===---===---[===]---===---===---===---===||\\
