import { Injectable, Inject }   from '@angular/core';
import { HttpClient }           from '@angular/common/http';

import { Observable }           from 'rxjs';

import { AngularEditorConfig }  from '@kolkov/angular-editor';

import { IConfig, IConfigNode } from '@app/modules/core/models/config.interface';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	constructor(
		private http: HttpClient,
		@Inject('BASE_URL') private baseUrl: string
	) {
	}

	private getConfigUrl() {
		return this.baseUrl + 'assets/json/config.json';
	}

	public getConfig(): Observable<IConfig> {
		return this.http.get<IConfig>(this.getConfigUrl());
	}

	public setConfig(config: IConfig): Observable<any> {
		return this.http.put<IConfig>(this.getConfigUrl(), config);
	}

	public getMatchingChild(link: string, node: IConfigNode): IConfigNode | undefined {
		return node['children']!.find((n) => n.link === link);
	}

	public canShowItem(config: IConfig, page: string, item: any): any {
		let cats = this.getPageCategories(config, page);
		for (let i = 0; i < cats.length; i++) {
			if (item.category === cats[i].link) {
				// Now check for sub-cat
				let subcats: IConfigNode[] = this.getSubcategories(config, page, item.category);
				for (let i = 0; i < subcats.length; i++) {
					if (item.subcategory === subcats[i].link) {
						return true;
					}
				}
				return false;
			}
		}

		return false;
	}

	public getPageCategories(config: IConfig, page: any): IConfigNode[] {
		let categories: IConfigNode[] = [];
		let children: IConfigNode[] = config['menu_layout']![page]![0]['children']!;

		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			if (child['hidden'] !== "true") {
				categories.push({
					link: child.link,
					text: child.text
				});
			}
		}

		return categories;
	}

	public getSubcategories(config: IConfig, page: any, category: string): IConfigNode[] {
		let subcategories: IConfigNode[] = [];
		let pageNode: IConfigNode = config['menu_layout']![page]![0];
		let catNode: IConfigNode = this.getMatchingChild(category, pageNode)!;

		for (let i = 0; i < catNode.children!.length; i++) {
			let child: IConfigNode = catNode.children![i];
			if (child['hidden'] !== "true") {
				subcategories.push(child);
			}
		}

		return subcategories;
	}

	public getAngularEditorConfig(): AngularEditorConfig {
		return {
			editable: true,
			spellcheck: true,
			height: 'auto',
			minHeight: '0',
			maxHeight: 'auto',
			width: 'auto',
			minWidth: '0',
			translate: 'yes',
			enableToolbar: true,
			showToolbar: true,
			placeholder: 'Enter text here...',
			defaultParagraphSeparator: '',
			defaultFontName: '',
			defaultFontSize: '',
			fonts: [
				{class: 'arial', name: 'Arial'},
				{class: 'times-new-roman', name: 'Times New Roman'},
				{class: 'calibri', name: 'Calibri'},
				{class: 'comic-sans-ms', name: 'Comic Sans MS'}
			],
			customClasses: [
				{ name: 'quote', class: 'quote' },
				{ name: 'redText', class: 'redText' },
				{ name: 'titleText', class: 'titleText', tag: 'h1' }
			],
			uploadUrl: 'v1/image',
			sanitize: true,
			toolbarPosition: 'top'
		};
	}
}
