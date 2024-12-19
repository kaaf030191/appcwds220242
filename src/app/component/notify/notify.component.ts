import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-notify',
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: './notify.component.html',
	styleUrl: './notify.component.scss'
})

export class NotifyComponent {
	@Input() type: string = '';
	@Input() listMessage: string[] = [];

	public alertType(): string {
		return this.type == 'sucess' ? 'primary' : ((this.type == 'error' || this.type == 'exception') ? 'danger' : this.type);
	}
}