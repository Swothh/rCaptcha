/// <reference types="node" />
import { IrCaptcha } from "./interfaces";
export declare class Captcha implements IrCaptcha {
    difficulty: IrCaptcha['difficulty'];
    length: IrCaptcha['length'];
    captcha?: IrCaptcha['captcha'];
    keywords?: IrCaptcha['keywords'];
    constructor(rCaptcha: IrCaptcha);
    generate(): Promise<{
        text: string;
        keywords: string;
        difficulty: "KOLAY" | "ORTA" | "ZOR" | "ÇOKZOR" | "EASY" | "MEDIUM" | "HARD" | "VERYHARD";
        length: number;
        response: {
            dataURL: string;
            buffer: Buffer;
        };
    }>;
}
