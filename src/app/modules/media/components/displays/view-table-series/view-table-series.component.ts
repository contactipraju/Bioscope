import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }                     from '@app/modules/core/models/table.interface';
import { IEvent, ISeries }            from '@app/modules/media/models/media.interface';

import { EditSeriesComponent }        from '@app/modules/media/components/edit/edit-series/edit-series.component';

@Component({
	selector: 'media-view-table-series',
	templateUrl: './view-table-series.component.html',
	styleUrls: ['./view-table-series.component.scss']
})
export class ViewTableSeriesComponent implements OnInit, OnChanges {
	@Input() data: IEvent[];
	@Input() page: string;

	modalRef_EditSeries: BsModalRef;

	table: ITable = {
		header: "Series",
		columnTitles: ["ID", "Series Name", "From", "To"],
		props: ["id", "name", "startDateFormatted", "endDateFormatted"],
		data: []
	};

	constructor(private modalService: BsModalService) {
	}

	ngOnInit() {
		//console.log("ViewTableSeriesComponent - ngOnInit: ", this.data);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		console.log("ViewTableSeriesComponent - ngOnChanges: ", changes);

		if(this.data) {
			this.sortSeries(this.data);
		}
	}

	addSeries(e: any) {
		const initialState = {
			mode: "add",
			event: {}
		};

		this.modalRef_EditSeries = this.modalService.show(EditSeriesComponent, { initialState });
		this.modalRef_EditSeries.content.modalRef = this.modalRef_EditSeries;
	}

	selectSeries(e: any) {
		const initialState = {
			mode: "edit",
			event: e
		};

		this.modalRef_EditSeries = this.modalService.show(EditSeriesComponent, { initialState });
		this.modalRef_EditSeries.content.modalRef = this.modalRef_EditSeries;
	}

	sortSeries(series: ISeries[]) {
		series.sort((a,b) => {
			return a.startDate!.getTime() - b.startDate!.getTime();
		});

		this.table.data = [];
		for (let i=0; i<series.length; i++) {
			this.table.data.push(series[i]);
		}
	}
}
