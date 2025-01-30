import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	let relativePath = new URL(req.url).pathname;
	let jwtToken = localStorage.getItem('sessionJwtToken');
	
	let existsLogin = jwtToken != undefined
	&& jwtToken != null
	&& jwtToken != 'undefined';

	if(!existsLogin && relativePath != '/person/login') {
		let router = inject(Router);

		router.navigate(['person/login']);

		return of();
	}

	if(existsLogin) {
		req = req.clone({
			setHeaders: {
				Authorization: `Bearer ${jwtToken}`
			}
		});
	}

	return next(req);
};