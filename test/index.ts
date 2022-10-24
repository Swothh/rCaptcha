import { Captcha } from "../src";

let cp = new Captcha({
    difficulty: "VERYHARD",
    length: 10,
    keywords: 'casgws!$½&/()=?^*+~#', 
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
