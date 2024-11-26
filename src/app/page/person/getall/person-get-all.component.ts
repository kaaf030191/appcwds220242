import { Component } from '@angular/core';
import { PersonService } from '../../../api/person.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'person-get-all',
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: './person-get-all.component.html',
	styleUrl: './person-get-all.component.scss'
})

export class PersonGetAllComponent {
	listPerson: any[] = [];

	constructor(
		private personService: PersonService
	) {}

	ngOnInit() {
		this.personService.getAll().subscribe({
			next: (response: any) => {
				this.listPerson = response.dto.listPerson;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}