import { Component, OnInit } from '@angular/core';
import { Input, OnChanges, SimpleChange }  from '@angular/core';

import { IConfig }   from '@app/modules/core/models/config.interface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
	@Input() page: string;
	@Input() config: IConfig;

	configAvailable: boolean = false;

	constructor() { }

	ngOnInit() {
		//console.log(this.page, this.config);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		const config = changes['config'];

		if(config.previousValue != config.currentValue && config.currentValue != null) {
			//console.log("MenuComponent - ngOnChanges: ", changes);
			this.configAvailable = true;
		}
	}
}
