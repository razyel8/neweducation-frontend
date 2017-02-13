import {StatusPowierzenia} from "./StatusPowierzenia";
export class ZaplanowanePowierzenie{
    id: number;
    isDeleted: boolean;
    prowadzacyId: number;
    liczbaGodzin: number;
    status: StatusPowierzenia
}