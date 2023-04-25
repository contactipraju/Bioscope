import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { ISeries } from '@app/modules/media/models/media.interface';

@Component({
	selector: 'media-view-tile-series',
	templateUrl: './view-tile-series.component.html',
	styleUrls: ['./view-tile-series.component.scss']
})
export class ViewTileSeriesComponent implements OnInit, OnChanges {
	@Input() seriesList: ISeries[];
	@Input() category: string;
	@Input() subcategory?: string;
	@Input() program?: string;
	@Input() id?: string;

	filteredSeriesList: ISeries[] = [];

	constructor() { }

	ngOnInit() {
		// console.log("ViewTileSeriesComponent - ngOnInit: ", this.seriesList);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("ViewTileSeriesComponent - ngOnChanges: ", changes, this.category, this.subcategory, this.id);

		if (this.seriesList) {
			this.sortSeries(this.seriesList);
		}
	}

	sortSeries(series: ISeries[]) {
		series.sort((a,b) => {
			return b.startDate!.getTime() - a.startDate!.getTime();
		});

		this.filteredSeriesList = [];
		for (let i=0; i<series.length; i++) {
			if(!this.category
			|| (this.category === series[i].category && !this.subcategory)
			|| (this.category === series[i].category && this.subcategory === series[i].subcategory)
			|| (this.category === series[i].category && this.subcategory === series[i].subcategory && this.program === series[i].program)) {

				this.filteredSeriesList.push(series[i]);
			}
		}
	}
}
