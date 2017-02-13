import {ZaplanowanePowierzenie} from "./ZaplanowanePowierzenie";
export class Kurs {
    kursId: number;
    typStudiow: string;
    kurs: string;
    forma: string;
    nrSemestru: number;
    prowadzacyIds: number[]
    zapotrzebowanie: number
    przydzielono: number;
    zaplanowanePowierzenia: ZaplanowanePowierzenie[]
}
