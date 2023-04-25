import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { UtilsService }   from '@app/modules/core/services/utils.service';

@Component({
	selector: 'app-table-view',
	templateUrl: './table-view.component.html',
	styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
	@Input() data: any;
	@Input() page: string;
	@Input() showHeader = false;

	@Output() selectEmitter = new EventEmitter<object>();

	searchText: string = "";
	canEdit = true;

	constructor(
		//public _authService: AuthService,
		private _utilsService: UtilsService
	) { }

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		//console.log("changes: ", changes);
	}

	ngOnInit() {
		//console.log("TableViewComponent - data: ", this.data);
	}

	viewItem(item: any) {
		window.location.href = this._utilsService.createUrlForEntity(this.page, item);
	}

	selectItem($event: any, item: any) {
		this.selectEmitter.emit(item);
		$event.stopPropagation();
	}
}
