import { IrCaptcha } from "./interfaces";
export declare class rCaptcha implements IrCaptcha {
    difficulty: IrCaptcha['difficulty'];
    length: IrCaptcha['length'];
    captcha?: IrCaptcha['captcha'];
    constructor(rCaptcha: IrCaptcha);
    generate(): Promise<string>;
}
