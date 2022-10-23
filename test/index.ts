import { rCaptcha } from "../src";

let cp = new rCaptcha({
    difficulty: "VERYHARD",
    length: 10,
    captcha: {
        backgroundColor: "#E0E0E0",
        textColor: "#000000",
        strokeColor: "#ffffff",
    }
});

(async () => {
    let captcha = await cp.generate();
    console.log(captcha);
})();