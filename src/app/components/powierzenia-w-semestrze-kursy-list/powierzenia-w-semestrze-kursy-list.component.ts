import {Component, OnInit, OnDestroy} from '@angular/core';
import {Params, Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Kurs} from "../../model/designations/Kurs";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'app-powierzenia-w-semestrze-kursy-list',
    templateUrl: './powierzenia-w-semestrze-kursy-list.component.html',
    styleUrls: ['./powierzenia-w-semestrze-kursy-list.component.css']
})
export class PowierzeniaWSemestrzeKursyListComponent implements OnInit, OnDestroy {

    private sub: any;

    private kursyListObs: FirebaseListObservable<Kurs[]>;

    idSemestru: number;
    idWydzialu: number;
    idKierunku: number;

    constructor(private route: ActivatedRoute, private router: Router, private af: AngularFire) {
    }

    ngOnInit() {

        // this.route.params
        //     .switchMap((params: Params) => {
        //       //this.selectedId = +params['id'];
        //       console.log(+params['semestrId']);
        //       console.log(+params['wydzialId']);
        //       console.log(+params['kierunekId']);
        //     });

        this.sub = this.route.params.subscribe(params => {
            //this.id = +params['semestrId']; // (+) converts string 'id' to a number
                  console.log(+params['semestrId']);
                  console.log(+params['wydzialId']);
                  console.log(+params['kierunekId']);

            this.idSemestru = +params['semestrId'];
            this.idWydzialu = +params['wydzialId'];
            this.idKierunku = +params['kierunekId'];
            // In a real app: dispatch action to load the details here.
            this.kursyListObs = this.af.database.list('/semestr/'+params['semestrId']+'/wydzial/'+params['wydzialId']+'/kierunek/'+params['kierunekId']+'/kurs');
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    selectKurs(kurs: Kurs){
        this.router.navigate(['/dashboard/powierzenia-w-semestrze/semestr/'+this.idSemestru+'/wydzial/'+this.idWydzialu+'/kierunek/'+this.idKierunku+'/kurs/'+kurs.kursId]);
    }

}
