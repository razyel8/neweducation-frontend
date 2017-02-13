import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Sondaz} from "../model/survey/Sondaz";
import {Semestr} from "../model/general/Semestr";
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";

@Injectable()
export class SondazeService {

  // items: FirebaseListObservable<Sondaz[]>;
  //
  // constructor(private http: Http, af: AngularFire) {
  //   this.items = af.database.list('/sondaze');
  // }
  //
  // getSondaze():Sondaz[]{
  //
  //   return this.items.subscribe(v => {console.log(v);
  //     return v as Sondaz[]);
  // }
  //
  //
  // selectSpecjalizacja(idSondazu: number, idSpecjalizacji: number){
  //   this.items.update(idSondazu.toString(), {statusSondazuEnum: 3, selectedSpecId: idSpecjalizacji})
  // }
  //
  // denySondaz(id: number){
  //
  // }

}
