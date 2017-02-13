import {Specjalnosc} from "./Specjalnosc";
export class Sondaz{
    id: number;
    nazwa: string;
    dataUtw: string;
    dataRozp: string;
    dataZak: string;
    opis: string;
    semestrId: number;
    statusSondazu: string;
    statusSondazuEnum: number;
    selectedSpecId: number;
    specjalnosci: Specjalnosc[]
}