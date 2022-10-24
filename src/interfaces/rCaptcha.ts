import { Difficulty } from "src/utils";

export interface IrCaptcha {
    difficulty: 'KOLAY' | 'ORTA' | 'ZOR' | 'ÇOKZOR' | 'EASY' | 'MEDIUM' | 'HARD' | 'VERYHARD';
    length: number;
    keywords?: string;
    captcha?: {
        backgroundColor?: string;
        textColor?: string;
        strokeColor?: string;
        backgroundImage?: string;
    }
};
