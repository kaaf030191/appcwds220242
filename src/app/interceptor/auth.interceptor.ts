import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	let relativePath = new URL(req.url).pathname;
	
	let existsLogin = localStorage.getItem('sessionIdPerson') != undefined
	&& localStorage.getItem('sessionIdPerson') != null
	&& localStorage.getItem('sessionIdPerson') != 'undefined';

	if(!existsLogin && relativePath != '/person/login') {
		let router = inject(Router);

		router.navigate(['person/login']);

		return of();
	}

	return next(req);
};