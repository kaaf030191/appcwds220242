import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
	let existsLogin = localStorage.getItem('sessionIdPerson') != undefined
	&& localStorage.getItem('sessionIdPerson') != null
	&& localStorage.getItem('sessionIdPerson') != 'undefined';

	if(!existsLogin) {
		let router = inject(Router);

		router.navigate(['person/login']);

		return false;
	}

	return true;
};