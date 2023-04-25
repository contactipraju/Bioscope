import { Component, OnInit, Input } from '@angular/core';
import { IConfig } from '@app/modules/core/models/config.interface';

@Component({
	selector: 'app-lhs',
	templateUrl: './lhs.component.html',
	styleUrls: ['./lhs.component.scss']
})
export class LhsComponent implements OnInit {
	@Input() page: string;
	@Input() config: IConfig;

	constructor() { }

	ngOnInit() {
	}
}
