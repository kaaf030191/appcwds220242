import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { PersonService } from '../../../api/person.service';
import { Router } from '@angular/router';
import { NotifyComponent } from '../../../component/notify/notify.component';

@Component({
	selector: 'person-login',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		NotifyComponent
	],
	templateUrl: './person-login.component.html',
	styleUrl: './person-login.component.scss'
})

export class PersonLoginComponent {
	frmPersonLogin: UntypedFormGroup;

	typeResponse: string = '';
	listMessageResponse: string[] = [];

	get dniFb() { return this.frmPersonLogin.controls['dni']; }
	get passwordFb() { return this.frmPersonLogin.controls['password']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: PersonService,
		private router: Router
	) {
		this.frmPersonLogin = this.formBuilder.group({
			dni: ['', []],
			password: ['', []]
		});
	}

	public login(): void {
		let formData = new FormData();

		formData.append('dni', this.dniFb.value);
		formData.append('password', this.passwordFb.value);

		this.personService.login(formData).subscribe({
			next: (response: any) => {
				this.typeResponse = response.mo.type;
				this.listMessageResponse = response.mo.listMessage;

				switch(response.mo.type) {
					case 'success':
						this.router.navigate(['/person/getall']);

						break;
				}
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}