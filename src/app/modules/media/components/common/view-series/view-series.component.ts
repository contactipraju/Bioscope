import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { ISeries } from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-view-series',
	templateUrl: './view-series.component.html',
	styleUrls: ['./view-series.component.scss']
})
export class ViewSeriesComponent implements OnInit {
	@Input() items: ISeries[];
	@Input() seriesId: string;

	series: ISeries;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("ViewSeriesComponent - ngOnInit: ", this.items);
		if (this.items && this.items.length) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].id === this.seriesId) {
					this.series = this.items[i];
					break;
				}
			}
		}
	}
}
