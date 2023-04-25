import { Component, OnInit, Input } from '@angular/core';

import cloneDeep from 'lodash-es/cloneDeep';

import { RouteService } from '@app/modules/core/services/route.service';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
	providers: [ RouteService ]
})
export class ArticleComponent implements OnInit {
	@Input() item: any;
	@Input() parents: string[];

	public itemLink: string = '';
	//public pageLink: string = '';

	public parentsLink: string = '';
	public parentsList: string[] = [];

	constructor(private route: RouteService) {
		// this.readParams();
	}

	// TODO: Remove if not required
	// readParams() {
	// 	this.pageLink = this.route.getPage()!;
	// }

	ngOnInit() {
		this.prepLinks();
	}

	prepLinks() {
		if(this.parents && this.parents.length) {
			for (let i = 0; i < this.parents.length; i++) {
				if(this.parentsLink.length) {
					this.parentsLink += '/';
				}
				this.parentsLink += this.parents[i].link;
			}
			this.parentsLink += '/';
			this.parentsList = cloneDeep(this.parents);
		}

		this.itemLink = this.parentsLink + this.item.link;
		this.parentsList.push(this.item);
	}
}
