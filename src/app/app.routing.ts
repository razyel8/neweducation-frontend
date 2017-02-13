import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginPanelComponent} from "./components/login-panel/login-panel.component";
import {SondazeComponent} from "./components/sondaze/sondaze.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AkceptacjaPowierzenComponent} from "./components/akceptacja-powierzen/akceptacja-powierzen.component";
import {PowierzeniaWSemestrzeListComponent} from "./components/powierzenia-w-semestrze-list/powierzenia-w-semestrze-list.component";
import {PowierzeniaWSemestrzeKursyListComponent} from "./components/powierzenia-w-semestrze-kursy-list/powierzenia-w-semestrze-kursy-list.component";
import {PowierzeniaWSemestrzeKursComponent} from "./components/powierzenia-w-semestrze-kurs/powierzenia-w-semestrze-kurs.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginPanelComponent
    },
    {
        path: 'login',
        component: LoginPanelComponent
    },
    {
        path: 'sondaze',
        component: SondazeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: WelcomeComponent},
            {path: 'sondaze', component: SondazeComponent},
            {path: 'akceptacja-powierzen', component: AkceptacjaPowierzenComponent},
            {path: 'powierzenia-w-semestrze', component: PowierzeniaWSemestrzeListComponent},
            {path: 'powierzenia-w-semestrze/semestr/:semestrId/wydzial/:wydzialId/kierunek/:kierunekId', component: PowierzeniaWSemestrzeKursyListComponent},
            {path: 'powierzenia-w-semestrze/semestr/:semestrId/wydzial/:wydzialId/kierunek/:kierunekId/kurs/:kursId', component: PowierzeniaWSemestrzeKursComponent},
        ]
    },


    // {
    //     path: 'designation/semester',
    //     component: DesignationSemesterListComponent
    // },
    // {
    //     path: 'designation/all',
    //     component: DesignationInSemesterComponent
    // },

    // {
    //     path: 'survey',
    //     component: SurveyComponent
    // },
    //
    // {
    //     path: 'welcome',
    //     component: WelcomeComponent
    // }
    // {
    //     path: 'dashboard/valuations',
    //     component: ValuationsComponent,
    //     outlet: 'dashboard'
    // },
    // {
    //     path: 'dashboard/transactions',
    //     component: TransactionsComponent,
    //     outlet: 'dashboard'
    // },
    // {
    //     path: 'dashboard/features',
    //     component: FeaturesComponent,
    //     outlet: 'dashboard'
    // },
];
export const routing = RouterModule.forRoot(appRoutes);