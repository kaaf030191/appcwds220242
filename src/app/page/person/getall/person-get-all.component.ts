import { Component } from '@angular/core';
import { PersonService } from '../../../api/person.service';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from '../../../component/notify/notify.component';

@Component({
	selector: 'person-get-all',
	standalone: true,
	imports: [
		CommonModule,
		NotifyComponent
	],
	templateUrl: './person-get-all.component.html',
	styleUrl: './person-get-all.component.scss'
})

export class PersonGetAllComponent {
	listPerson: any[] = [];

	typeResponse: string = '';
	listMessageResponse: string[] = [];

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

	delete(idPerson: string): void {
		this.personService.delete(idPerson).subscribe({
			next: (response: any) => {
				this.typeResponse = response.mo.type;
				this.listMessageResponse = response.mo.listMessage;

				switch(response.mo.type) {
					case 'success':
						this.listPerson = this.listPerson.filter(x => x.idPerson != idPerson);

						break;
				}
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}