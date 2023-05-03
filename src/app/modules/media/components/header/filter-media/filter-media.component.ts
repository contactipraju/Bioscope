import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { IConfig } from '@app/modules/core/models/config.interface';
import { IEvent }  from '@app/modules/media/models/media.interface';

import { ConfigService } from '@app/modules/core/services/config.service';

@Component({
	selector: 'app-filter-media',
	templateUrl: './filter-media.component.html',
	styleUrls: ['./filter-media.component.scss']
})
export class FilterMediaComponent implements OnInit {
	@Input() items: IEvent[];
	@Input() config: IConfig;
	@Input() page: string;
	@Input() category: string;
	@Input() subcategory?: string;
	@Input() params?: any;

	list: IEvent[] = [];
	searchText: string = '';
	selectedDisplay = 'cards';
	displayOptions? = [
		{ id: 'cards', label: 'Cards' },
		{ id: 'calendar', label: 'Calendar' },
		{ id: 'episodes-table', label: 'Episodes-Table' },
		{ id: 'series-table', label: 'Series-Table'}
	];

	constructor(
		private configService: ConfigService
	) { }

	ngOnInit() {
		// console.log('FilterAndDisplayComponent: ', this.category, this.config, this.params);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("FilterAndDisplayComponent - ngOnChanges: ", this.items);
		if (this.items && this.items.length) {
			this.sortPosts(this.items);
		}
	}

	onSearch(search: string) {
		// console.log('FilterAndDisplayComponent - onSearch: ', search);
		this.searchText = search;
	}

	onDisplay(display: string) {
		// console.log('FilterAndDisplayComponent - onDisplay: ', display);
		this.selectedDisplay = display;
	}

	sortPosts(items: IEvent[]) {
		this.list = [];
		for (let i=0; i<items.length; i++) {
			// TODO: remove speakers from series info for now, for accurate filtering (at episode level)
			//delete items[i]['speakers'];

			if(this.configService.canShowItem(this.config, this.page, items[i]) && 
				(
					!this.category
					|| (this.category === items[i].category && !this.subcategory)
					|| (this.category === items[i].category && this.subcategory === items[i].subcategory
				)
			)) {
				this.list.push(items[i]);
			}
		}
	}
}
