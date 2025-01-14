import { Routes } from '@angular/router';
import { PersonInsertComponent } from './page/person/insert/person-insert.component';
import { PersonGetAllComponent } from './page/person/getall/person-get-all.component';
import { PersonLoginComponent } from './page/person/login/person-login.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'person/login', component: PersonLoginComponent },
	{ path: 'person/insert', component: PersonInsertComponent },
	{ path: 'person/getall', component: PersonGetAllComponent }
];
