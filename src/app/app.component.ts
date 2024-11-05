import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './api/person.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})

export class AppComponent {
	person: any = {};

	constructor(
		private personService: PersonService
	) {}

	ngOnInit() {
		this.personService.getData().subscribe({
			next: (response: any) => {
				this.person = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}