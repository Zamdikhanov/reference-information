export type TAccessory = {
    id: string;
    title: string;
    [designation: string]: string[] | string;
    imgUrl: string[];
    description: string[];
};
