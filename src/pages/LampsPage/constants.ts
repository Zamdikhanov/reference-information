export type TLamp = {
    id: string;
    series: string;
    title: string;
    designation?: string[];
    imgUrl?: string[];
    ip?: string;
    climate?: string[];
    type?: string;
    purpose?: string;
    warranty?: number;
    material?: string;
    color?: string;
    powerRange?: number[];
    lens?: string[];
    [key: string]: any;
};
