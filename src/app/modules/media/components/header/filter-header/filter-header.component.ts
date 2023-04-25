import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter, Output }     from '@angular/core';

import { environment }   from 'src/environments/environment';

//import { IPost } from '@app/modules/shared/models/misc.interface';

import { UtilsService }     from '@app/modules/core/services/utils.service';

@Component({
	selector: 'app-filter-header',
	templateUrl: './filter-header.component.html',
	styleUrls: ['./filter-header.component.scss']
})
export class FilterHeaderComponent implements OnInit {
	@Input() list: any[];
	@Input() filteredList: any[];
	@Input() page: string;
	@Input() params?: any;

	@Output() searchEmitter = new EventEmitter<string>();
	@Output() displayEmitter = new EventEmitter<string>();

	@Input() displayOptions? = [
		{ id: 'cards', label: 'Cards' },
		{ id: 'list', label: 'List' },
		{ id: 'table', label: 'Table' }
	];
	// TODO: Add later:
	// { id: 'map', label: 'Map' },
	// { id: 'slider', label: 'Slider' },

	searchText: string = '';
	selectedDisplay = 'cards';
	displayFilterKey = 'displayFilter';
	isProduction = environment.production;
	private localStorage = window.localStorage;
	totalEpisodes = -1;

	constructor(
		public utilityService: UtilsService
	) { }

	ngOnInit(): void {
		this.initFilterSelection();
		this.countEpisodes();
	}

	countEpisodes() {
		if (this.page === 'media') {
			let total = 0;
			for (let i=0; i<this.list.length; i++) {
				total += this.list[i]['episodes'].length;
			}
			this.totalEpisodes = total;
		}
	}

	initFilterSelection() {
		this.searchText = (this.params && this.params["search"]) ? this.params["search"] : "";

		if (this.params && this.params["display"]
			&& this.displayOptions!.find((d) => d.id === this.params["display"])) {
				this.selectedDisplay = this.params["display"];
		}
		else {
			let savedFilter = this.localStorage.getItem(this.displayFilterKey);
			this.selectedDisplay = savedFilter ? savedFilter : 'cards';
		}

		this.displayEmitter.emit(this.selectedDisplay);
	}

	// TODO: Temporary file to import json data into firebase
	createInFirebase() {
		for (let i = 0; i < this.filteredList.length; i++) {
			this.create(this.filteredList[i]);
		}
	}

	create(item: any) {
		if (this.page === 'ask') {
			//this._store.dispatch(new CreatePost(item));
		}
		else if (this.utilityService.isPersonPage(this.page)) {
			item['ptype'] = this.page;
			//this._store.dispatch(new CreatePerson(item));
		}
	}

	updateToFirebase() {
		for (let i = 0; i < this.filteredList.length; i++) {
			this.update(this.filteredList[i]);
		}
	}

	update(item: any) {
		if (this.page === 'ask') {
			//this._store.dispatch(new UpdatePost(item));
		}
		else if (this.utilityService.isPersonPage(this.page)) {
			item['ptype'] = this.page;
			//this._store.dispatch(new UpdatePerson(item));
		}
	}

	deleteInFirebase() {
		for (let i = 0; i < this.filteredList.length; i++) {
			this.delete(this.filteredList[i]);
		}
	}

	delete(item: any) {
		if (this.page === 'ask') {
			//this._store.dispatch(new DeletePost(item));
		}
		else if (this.utilityService.isPersonPage(this.page)) {
			item['ptype'] = this.page;
			//this._store.dispatch(new DeletePerson(item));
		}
	}

	clearFilters() {
		this.searchText = '';
		this.onSearchChange();
	}

	copySearchLink() {
		//this.clipboard.copy(window.location.href);
	}

	onSearchChange() {
		// console.log("FilterHeaderComponent - onSearchChange: ", this.searchText);
		this.searchEmitter.emit(this.searchText);
	}

	onDisplayChange($event: any) {
		// console.log("FilterHeaderComponent - onDisplayChange: ", $event);

		// this.analytics.logEvent('display_change', {
		// 	page: this.page, id: this.selectedDisplay
		// });

		this.localStorage.setItem(this.displayFilterKey, this.selectedDisplay);

		this.displayEmitter.emit($event);
	}
}
