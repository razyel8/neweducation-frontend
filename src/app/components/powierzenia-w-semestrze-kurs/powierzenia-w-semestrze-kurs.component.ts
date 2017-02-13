import {Component, OnInit} from "@angular/core";
import {Kurs} from "../../model/designations/Kurs";
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";
import {Router, ActivatedRoute} from "@angular/router";
import {Prowadzacy} from "../../model/designations/Prowadzacy";
import {ZaplanowanePowierzenie} from "../../model/designations/ZaplanowanePowierzenie";

@Component({
    selector: 'app-powierzenia-w-semestrze-kurs',
    templateUrl: './powierzenia-w-semestrze-kurs.component.html',
    styleUrls: ['./powierzenia-w-semestrze-kurs.component.css']
})
export class PowierzeniaWSemestrzeKursComponent implements OnInit {

    private kursObs: FirebaseObjectObservable<Kurs>;
    public queryObservable: FirebaseListObservable<any>;
    public prowadzacyIds: FirebaseListObservable<number[]>;
    public prowadzacyObs: FirebaseListObservable<Prowadzacy[]>;
    public editZaplanowanePowierzenieId: number;
    public editZaplanowanePowierzenie: ZaplanowanePowierzenie

    private sub: any;

    idSemestru: number;
    idWydzialu: number;
    idKierunku: number;
    idKursu: number;

    constructor(private route: ActivatedRoute, private router: Router, private af: AngularFire) {
    }

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
            // In a real app: dispatch action to load the details here.
            this.kursObs = this.af.database.object('/semestr/' + params['semestrId'] + '/wydzial/' + params['wydzialId'] + '/kierunek/' + params['kierunekId'] + '/kurs/' + params['kursId']);
            this.prowadzacyObs = this.af.database.list('/prowadzacy');
            //this.prowadzacyIds = this.this.af.database.list('/semestr/'+params['semestrId']+'/wydzial/'+params['wydzialId']+'/kierunek/'+params['kierunekId']+'/kurs/'+params['kursId']+'/prowadzacyIds/');
        });
        const queryObservable = this.af.database.list('/prowadzacy', {
            query: {
                orderByChild: 'prowadzoneKursyId',
                equalTo: 3
            }
        });
    }

    czyProponowany(prowadzacy: Prowadzacy, kurs: Kurs): boolean {
        if(!kurs.prowadzacyIds || !prowadzacy){ return false}
        return (kurs.prowadzacyIds.indexOf(prowadzacy.id) != -1) && !this.czyZaplanowany(prowadzacy, kurs);
        // kurs.prowadzacyIds.forEach(id => {if(id === prowadzacy.id) return true;});
        // return false;
    }

    czyPozostaly(prowadzacy: Prowadzacy, kurs: Kurs): boolean {
        if(!kurs.prowadzacyIds || !prowadzacy){ return true}
        return (kurs.prowadzacyIds.indexOf(prowadzacy.id) == -1) && !this.czyZaplanowany(prowadzacy, kurs);
        // kurs.prowadzacyIds.forEach(id => {if(id === prowadzacy.id) return true;});
        // return false;
    }

    czyZaplanowany(prowadzacy: Prowadzacy, kurs: Kurs){
        if(!kurs || !prowadzacy){ return false}
        if(kurs.zaplanowanePowierzenia) {
            for (let pow of kurs.zaplanowanePowierzenia) {
                if (pow.prowadzacyId === prowadzacy.id) return true;
            }
            return false;
        }
        return false;

        // if(kurs.zaplanowanePowierzenia?.prowadzacyId)
    }

    dodajPowierzenie(){
        console.log("Show modal");
        (<any>$('.ui.modal.add'))
            .modal('show')
        ;
    }

    edytujPowierzenie(zaplanowane: ZaplanowanePowierzenie){
        // this.editZaplanowanePowierzenieId = zaplanowane;

        console.log("Edit pow");
        console.log(zaplanowane);
        this.editZaplanowanePowierzenie = zaplanowane;
        this.editZaplanowanePowierzenieId = zaplanowane.id;
        (<any>$('.ui.modal.edit'))
            .modal('show')
        ;
    }

    usunPowierzenie(zaplanowane: ZaplanowanePowierzenie){
        // this.editZaplanowanePowierzenieId = zaplanowane;

        console.log("Edit pow");
        this.af.database.object('/semestr/' + this.idSemestru + '/wydzial/' + this.idWydzialu + '/kierunek/' + this.idKierunku + '/kurs/' + this.idKursu+'/zaplanowanePowierzenia/'+zaplanowane.id+'/isDeleted')
            .set(true);
    }

    getProwadzacy(id: number): FirebaseObjectObservable<Prowadzacy> {
        return this.af.database.object('/prowadzacy/' + id);
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
