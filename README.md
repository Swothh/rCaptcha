## rCaptcha® | Human Verification
---
---
---
> **Used Packages:** `canvas` and `latest-version`
---
> **Kullanılan Modüller:** `canvas` ve `latest-version`
---
---
---
> **Developer:** `Swôth#9990` and `Roalia#0001`
---
> **Geliştirici:** `Swôth#9990` ve `Roalia#0001`
---
---
---
#### Usage / Kullanım
---
---
---
```
EN: First we have to define the package.
TR: İlk olarak modülü tanımlamalıyız.
```
```js
const rCaptcha = require('rcaptcha')
```
---
```
EN: Let's see how to create a captcha.
TR: Nasıl captcha oluşturulduğuna bakalım.
```
```js
const rCaptcha = require('rcaptcha')
const newCaptcha = new rCaptcha({
    language: "", // TR or EN is available...
    difficulty: "", // EASY, MEDIUM, HARD, VERYHARD is available...
    length: 4, // Length is must me between 4 and 12...
})
```
---
```
EN: Let's see the response.
TR: Yanıtı görelim.
```
```js
const rCaptcha = require('rcaptcha')
const newCaptcha = new rCaptcha({
    language: "EN", // TR or EN is available...
    difficulty: "HARD", // EASY, MEDIUM, HARD, VERYHARD is available...
    length: 10, // Length is must me between 4 and 12...
})
console.log(newCaptcha)
//Console:
/*
{
    language: "EN",
    difficulty: "HARD",
    length: 10,
    code: "KJADJAD", // random
    image: {
        url: "imageurl",
        buffer: "buffercode"
    }
}
*/
```
---
```
EN: Let's move on to using Captcha.
TR: Captcha kullanımına geçelim.
```
```js
const rCaptcha = require('rcaptcha')
const newCaptcha = new rCaptcha({
    language: "EN", // TR or EN is available...
    difficulty: "HARD", // EASY, MEDIUM, HARD, VERYHARD is available...
    length: 10, // Length is must me between 4 and 12...
})

// captcha image link: newCaptcha.image.url
// example in discord.js: const x = new Discord.MessageAttachment(newCaptcha.image.buffer)
// example in html: <img src=" + newCaptcha.image.url + ">

const input = "TEST" // your input
if (input !== newCaptcha.code) {
    console.log("Captcha failed!")
} else {
    console.log("Captcha was passed!")
}
```
---
---
---
---
#### Updates / Güncellemeler
---
---
---
> **0.0.3 ▸ New developer (Roalia#0001) added, the number of lines has been reduced, automatic update!**
---
> **0.0.2 ▸ A small bug was fixed!**
---
> **0.0.1 ▸ Package created and published on NPM**
---
---
---
> **by `Swôth#9990` and `Roalia#0001` (MIT)**
