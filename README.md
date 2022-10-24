## rCaptcha® | Human Verification
![npm](https://img.shields.io/npm/v/rcaptcha?label=npm&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/rcaptcha?style=for-the-badge)
<br />

> Used Packages: `canvas`

### **Installation**
---
```shell
npm i --save rcaptcha
yarn add rcaptcha
```
---
### **Usage / Kullanım**
---
```js
import { Captcha } from 'rcaptcha'; // ESM
const { Captcha } = require('rcaptcha') // CJS
const newCaptcha = new rCaptcha({
    difficulty: "VERYHARD", // EASY, MEDIUM, HARD, VERYHARD is available...
    length: 10, //Length can be minimum 5, maximum 10.
    keywords: 'super-secret-keywords', // optional
    captcha: {
        backgroundColor: '#296CBC',
        textColor: '#fff',
        strokeColor: '#00000',
        backgroundImage: 'https://super-secret-image-url.com'
    } // Captcha settings is optional
});

let response = await newCaptcha.generate();

console.log(response);
/*
{
    difficulty: "VERYHARD",
    keywords: 'super-secret-keywords',
    length: 10,
    code: "super-secret-keywords", // random
    response: {
        dataURL: "imageurl",
        buffer: "buffercode"
    }
}
*/
```
---
> Developed with 💙 by `Loiren`, `Swôth`. **(MIT)**
