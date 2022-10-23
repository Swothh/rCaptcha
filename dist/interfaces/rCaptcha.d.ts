export interface IrCaptcha {
    difficulty: 'KOLAY' | 'ORTA' | 'ZOR' | 'ÇOKZOR' | 'EASY' | 'MEDIUM' | 'HARD' | 'VERYHARD';
    length: number;
    captcha?: {
        backgroundColor?: string;
        textColor?: string;
        strokeColor?: string;
        backgroundImage?: string;
    };
}
