import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		CommonModule
	],
	providers: [],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})

export class AppComponent {
	person: any = {};

	constructor() {}

	public existsLogin() {
		return localStorage.getItem('sessionJwtToken') != undefined
		&& localStorage.getItem('sessionJwtToken') != null
		&& localStorage.getItem('sessionJwtToken') != 'undefined';
	}
}