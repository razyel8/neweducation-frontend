import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Semestr} from "../model/general/Semestr";
import {Powierzenie} from "../model/designations/Powierzenie";

@Injectable()
export class PowierzeniaService {

  constructor(private http: Http) { }


  getSemestrList(): Semestr[]{

    return null;
  }

  getSondazeForSemestr(id: number):Powierzenie[]{


    return null;
  }


  acceptSondaz(id: number){

  }

  denySondaz(id: number){

  }
}
