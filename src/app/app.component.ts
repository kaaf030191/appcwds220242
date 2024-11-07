import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './api/person.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	providers: [
		BsModalService
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})

export class AppComponent {
	person: any = {};

	constructor(
		private personService: PersonService,
		private modalService: BsModalService
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

	showModal(myModal: TemplateRef<any>): void {
		this.modalService.show(myModal);
	}
	closeModal(): void {
		this.modalService.hide();
	}
}