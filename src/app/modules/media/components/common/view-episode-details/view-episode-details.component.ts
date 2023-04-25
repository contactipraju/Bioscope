import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { IEvent, ISeries } from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-view-episode-details',
	templateUrl: './view-episode-details.component.html',
	styleUrls: ['./view-episode-details.component.scss']
})
export class ViewEpisodeDetailsComponent implements OnInit {
	@Input() items: ISeries[];
	@Input() id: string;

	episode: IEvent;

	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("ViewEpisodeDetailsComponent - ngOnInit: ", this.items);
		if (this.items && this.items.length) {
			for (let i = 0; i < this.items.length; i++) {
				for (let j = 0; j < this.items[i]['episodes']!.length; j++) {
					if (this.items[i]['episodes']![j].id === this.id) {
						this.episode = this.items[i]['episodes']![j];
						break;
					}
				}
			}
		}
	}
}
