import { Injectable, Inject } from '@angular/core';

import { fromEvent } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {
	public isDesktop: boolean = false;
	public useLocalJson = false;
	private pagesUsingPersons = ['genii', 'indians', 'telugu'];

	constructor(
		@Inject('BASE_URL') private baseUrl: string
	) {
		this.watchWindowResize();
	}

	private watchWindowResize(): void {
		this.isDesktop = window.innerWidth > 1200;

		fromEvent(window, 'resize').subscribe((size) => {
			this.isDesktop = window.innerWidth > 1200;
		});
	}

	public getFileExtension(filename: string) {
		return filename.split('.').pop();
	}

	public isPersonPage(page: string) {
		return this.pagesUsingPersons.indexOf(page) > -1 ? true : false;
	}

	public usingLocalJson() {
		return this.useLocalJson;
	}

	public getLocalJsonUrl(ptype: string) {
		return this.baseUrl + 'assets/json/' + ptype + '.json';
	}

	public getImagePath(ptype: string, id: string, filename: string) {
		return 'images/' + ptype + '/' + id + '/' + filename + '.jpg';
	}

	public createUrlForEntity(page: string, item: any): any {
		let url = page + "/" + item.category + "/" + item.subcategory;
		if (page === 'media') {
			if (item['seriesId']) {
				url += "/" + item['seriesId'];
			}
		}
		url += "/" + item.id;

		return url;
	}

	public initApp() {
		this.configConsoleLogDisplay();
	}

	/* Disable all console logs on Production environment. Consider moving this to a different service!? */
	configConsoleLogDisplay(): void {
		if (!environment.showConsole['log']) console.log = function():void{}; 
		if (!environment.showConsole['info']) console.info = function():void{};
		if (!environment.showConsole['warn']) console.warn = function():void{};
		if (!environment.showConsole['debug']) console.debug = function():void{};
		if (!environment.showConsole['error']) console.error = function():void{};
	}
}
