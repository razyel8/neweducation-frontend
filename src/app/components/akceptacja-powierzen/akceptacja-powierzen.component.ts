import { Component, OnInit } from '@angular/core';
import {Powierzenie} from "../../model/designations/Powierzenie";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Semestr} from "../../model/general/Semestr";

@Component({
  selector: 'app-akceptacja-powierzen',
  templateUrl: './akceptacja-powierzen.component.html',
  styleUrls: ['./akceptacja-powierzen.component.css']
})
export class AkceptacjaPowierzenComponent implements OnInit {

  semestrListObs: FirebaseListObservable<Semestr[]>;
  powierzeniaListObs: FirebaseListObservable<Powierzenie[]>;
  selectedSemestrId: number;
  selectedPowierzenieId: number;

  constructor( private af: AngularFire) { }

  ngOnInit() {
    this.semestrListObs = this.af.database.list('/semestry');
  }

  selectPowierzenie(id: number){
    this.selectedPowierzenieId = id;
  }

  acceptPowierzenie(powierzenie: Powierzenie){
    console.log("accept");
    console.log(powierzenie.id);
    if(powierzenie.statusEnum === 1){
      console.log("accept");
      this.powierzeniaListObs.update(powierzenie.id.toString(), {statusEnum: 2});
    }
  }

  denyPowierzenie(powierzenie: Powierzenie){
    console.log("deny");
    if(powierzenie.statusEnum === 1){
      console.log("deny");
      this.powierzeniaListObs.update(powierzenie.id.toString(), {statusEnum: 3});
    }
  }

  updateSelectedValue(){

    this.powierzeniaListObs = this.af.database.list('/powierzenia/semestr/' + this.selectedSemestrId);

    console.log("Selected " + this.selectedSemestrId);
  }

  printStatus(statusEnum: number):string {
    switch(statusEnum){
      case 1:
        return "Proponowane";
      case 2:
        return "Zaakceptowane";
      case 3:
        return "Niezaakceptowane";
      case 4:
        return "W Przygotowaniu";
      default:
        return "W Przygotowaniu"
    }
  }

}
