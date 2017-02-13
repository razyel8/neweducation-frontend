import { Component, OnInit } from '@angular/core';
import {Sondaz} from "../../model/survey/Sondaz";
import {SondazeService} from "../../services/sondaze.service";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Http} from "@angular/http";
import {Specjalnosc} from "../../model/survey/Specjalnosc";

@Component({
  selector: 'app-sondaze',
  templateUrl: './sondaze.component.html',
  styleUrls: ['./sondaze.component.css']
})
export class SondazeComponent implements OnInit {

  sondazList: FirebaseListObservable<Sondaz[]>;
  sondazSelected: Sondaz;
  sondazSelectedId: number;
  statusSondazuEnum: number;

  items: FirebaseListObservable<Sondaz[]>;

  constructor(private http: Http, private af: AngularFire) {
    this.sondazList = af.database.list('/sondaze');
  }

  ngOnInit() {
    this.pokazSondaz(1);
  }

  selectSpecjalnosc(sondaz: Sondaz, specjalnosc: Specjalnosc){
    console.log(specjalnosc);
    if(sondaz.statusSondazuEnum === 1){
      this.sondazList.update(sondaz.id.toString(), {selectedSpecId: specjalnosc.id});
    }
  }

  zamknijSondaz(sondaz: Sondaz){
    this.sondazList.update(sondaz.id.toString(), {statusSondazuEnum: 3});
  }

  pokazSondaz(id: number) {
    this.sondazSelectedId = id;
  }

  printStatus(statusEnum: number):string {
    switch(statusEnum){
      case 1:
        return "Aktywny";
      case 2:
        return "Nieaktywny";
      case 3:
        return "Zakonczony";
      default:
        return "Nieaktywny"
    }
  }
}
