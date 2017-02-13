import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Kurs} from "../../model/designations/Kurs";
import {Input} from "@angular/core/src/metadata/directives";
import {Prowadzacy} from "../../model/designations/Prowadzacy";
import {FirebaseObjectObservable, FirebaseListObservable, AngularFire} from "angularfire2";
import {ZaplanowanePowierzenie} from "../../model/designations/ZaplanowanePowierzenie";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-powierzenie-edytuj',
  templateUrl: './powierzenie-edytuj.component.html',
  styleUrls: ['./powierzenie-edytuj.component.css']
})
export class PowierzenieEdytujComponent implements OnInit {
  @Input() kurs: FirebaseObjectObservable<Kurs>
  @Input() prowadzacy: FirebaseListObservable<Prowadzacy[]>
  @Input() powierzenieId: number;
  @Input() powierzenie: ZaplanowanePowierzenie;

  selectedProwadzacyId: number;
  public liczbaGodzin: number;
  // //@Input() zaplanowanePowierzenie: FirebaseObjectObservable<ZaplanowanePowierzenie>
  //
  // zaplanowanePowierzenia: FirebaseListObservable<ZaplanowanePowierzenie[]>
  //
  // @Output() dodanoPowierzenie = new EventEmitter();



  private sub: any;

  idSemestru: number;
  idWydzialu: number;
  idKierunku: number;
  idKursu: number;
  selectedProwadzacy: Prowadzacy;


  private zaplanowaneCounter: number

  constructor(private route: ActivatedRoute, private router: Router, private af: AngularFire) {
  }
  //
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      //this.id = +params['semestrId']; // (+) converts string 'id' to a number
      console.log(+params['semestrId']);
      console.log(+params['wydzialId']);
      console.log(+params['kierunekId']);

      this.idSemestru = +params['semestrId'];
      this.idWydzialu = +params['wydzialId'];
      this.idKierunku = +params['kierunekId'];
      this.idKursu = +params['kursId'];
      // this.zaplanowanePowierzenia = this.af.database.list('/semestr/' + params['semestrId'] + '/wydzial/' + params['wydzialId'] + '/kierunek/' + params['kierunekId'] + '/kurs/' + params['kursId']+'/zaplanowanePowierzenia');
      // this.zaplanowanePowierzenia.subscribe(snap => this.zaplanowaneCounter = snap.length);

      // this.af.database.object('/semestr/' + this.idSemestru + '/wydzial/' + this.idWydzialu + '/kierunek/' + this.idKierunku + '/kurs/' + this.idKursu+'/zaplanowanePowierzenia/counter')
      //     .subscribe(snap => this.zaplanowaneCounter = snap);


      // In a real app: dispatch action to load the details here.
      // this.kursObs = this.af.database.object('/semestr/' + params['semestrId'] + '/wydzial/' + params['wydzialId'] + '/kierunek/' + params['kierunekId'] + '/kurs/' + params['kursId']);
      // this.prowadzacyObs = this.af.database.list('/prowadzacy');
      //this.prowadzacyIds = this.this.af.database.list('/semestr/'+params['semestrId']+'/wydzial/'+params['wydzialId']+'/kierunek/'+params['kierunekId']+'/kurs/'+params['kursId']+'/prowadzacyIds/');
    });
  }


  edytujPowierzenie(){
    this.af.database.object('/semestr/' + this.idSemestru + '/wydzial/' + this.idWydzialu + '/kierunek/' + this.idKierunku + '/kurs/' + this.idKursu+'/zaplanowanePowierzenia/'+this.powierzenie.id)
           .set(this.powierzenie);

  }
  //
  // dodajPowierzenie(){
  //   //prowadzacy: Prowadzacy, liczbaGodzin: number;
  //   let zaplanowanePowierzenie: ZaplanowanePowierzenie  = new ZaplanowanePowierzenie();
  //   zaplanowanePowierzenie.liczbaGodzin = this.liczbaGodzin;
  //   zaplanowanePowierzenie.prowadzacyId = this.selectedProwadzacyId;//prowadzacy.id;
  //   zaplanowanePowierzenie.status = 1;
  //   this.af.database.object('/semestr/' + this.idSemestru + '/wydzial/' + this.idWydzialu + '/kierunek/' + this.idKierunku + '/kurs/' + this.idKursu+'/zaplanowanePowierzenia/'+this.zaplanowaneCounter.toString())
  //       .set(zaplanowanePowierzenie);
  //
  //   this.af.database.object('/semestr/' + this.idSemestru + '/wydzial/' + this.idWydzialu + '/kierunek/' + this.idKierunku + '/kurs/' + this.idKursu+'/zaplanowanePowierzenia/counter')
  //       .update(this.zaplanowaneCounter + 1);
  //
  //
  //   //this.kurs.child("zaplanowanePowierzenia").child(this.zaplanowaneCounter.toString()).set(zaplanowanePowierzenie);
  //
  //   //this.zaplanowanePowierzenia.child(this.zaplanowaneCounter.toString()).set(zaplanowanePowierzenie);//.update({zaplanowaneCounter, zaplanowanePowierzenie});
  //
  //   //this.dodanoPowierzenie.emit();
  // }
  //
  // printSelected(){
  //   console.log(this.selectedProwadzacy);
  //   console.log(this.selectedProwadzacyId);
  // }
}
