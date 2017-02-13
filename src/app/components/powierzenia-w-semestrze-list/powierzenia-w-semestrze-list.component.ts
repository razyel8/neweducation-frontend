import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PowierzeniaWSemestrze} from "../../model/designations/PowierzeniaWSemestrze";
import {StatusPowierzenWSemestrze} from "../../model/designations/StatusPowierzenWSemestrze";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-powierzenia-w-semestrze-list',
  templateUrl: './powierzenia-w-semestrze-list.component.html',
  styleUrls: ['./powierzenia-w-semestrze-list.component.css']
})
export class PowierzeniaWSemestrzeListComponent implements OnInit, AfterViewInit {

  constructor(private af: AngularFire) { }

  powierzenia: PowierzeniaWSemestrze[];
  statusPowierzen = StatusPowierzenWSemestrze;

  powierzeniaListObs: FirebaseListObservable<PowierzeniaWSemestrze[]>;

  ngOnInit() {
    this.powierzeniaListObs = this.af.database.list('/powierzenie-w-semestrze');
    // if (!this.powierzenia) {
    //   this.powierzeniaWSemestrzeService.getAllPowSem()
    //       .then(powierzenia => {
    //         this.powierzenia = powierzenia;
    //       });
    // }
  }

  ngAfterViewInit() {

  }

  printStatus(statusEnum: number):string {
    switch(statusEnum){
      case 0:
        return "Wersja rbocza";
      case 1:
        return "Do akceptacji";
      case 2:
        return "Niezaakceptowane";
      case 3:
        return "Zaakceptowane";
      case 4:
        return "Nieaktualne";
      default:
        return "Nieaktualne"
    }
  }


}
