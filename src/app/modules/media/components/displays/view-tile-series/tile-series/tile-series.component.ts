import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { ISeries } from '@app/modules/media/models/media.interface';

import { RouteService } from '@app/modules/core/services/route.service';

@Component({
	selector: 'app-tile-series',
	templateUrl: './tile-series.component.html',
	styleUrls: ['./tile-series.component.scss'],
	providers: [ RouteService ]
})
export class TileSeriesComponent implements OnInit, OnChanges {
	@Input() series: ISeries;
	seriesUrl: string = '';

	constructor(private route: RouteService) {
	}

	ngOnInit() {
		// console.log("TileSeriesComponent - ngOnInit: ", this.series);
		this.readParams();
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("TileSeriesComponent - ngOnChanges: ", changes);
	}

	readParams() {
		this.seriesUrl = "media/" + this.series['category'] + "/" + this.series['subcategory'] + "/" + this.series.id;
	}
}
