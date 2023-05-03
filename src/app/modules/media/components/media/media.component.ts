import { Component, OnInit } from '@angular/core';

import { IConfig } from '@app/modules/core/models/config.interface';
import { IEvent } from '@app/modules/media/models/media.interface';

import { RouteService }  from '@app/modules/core/services/route.service';
import { ConfigService } from '@app/modules/core/services/config.service';
import { EventService }  from '@app/modules/media/services/event.service';

@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: ['./media.component.scss'],
	host: {
		'(document:keydown)': 'handleKeyboardEvent($event)'
	},
	providers: [ RouteService ]
})
export class MediaComponent implements OnInit {
	events: IEvent[];
	config: IConfig;

	page: string = '';
	category: string = '';
	subcategory: string = '';
	seriesid: string = '';
	episodeid: string = '';

	params: any;

	constructor(
		private route: RouteService,
		private configService: ConfigService,
		private eventService: EventService
	) {
		this.readParams();
	}

	handleKeyboardEvent(event: KeyboardEvent) {
		console.log(event);
	}

	readParams() {
		let paths = this.route.getPath();
		this.page        = paths[0]!;
		this.category    = paths[1]!;
		this.subcategory = paths[2]!;
		this.seriesid    = paths[3]!;
		this.episodeid   = paths[4]!;

		this.params = this.route.getParams();
	}

	ngOnInit() {
		let params: any = {};

		if (this.category === undefined) {
			params['category'] = 'radio';
		}
		else {
			params['category'] = this.category;
		}

		if (this.subcategory !== undefined) {
			params['subcategory'] = this.subcategory;
		}

		if (this.seriesid !== undefined) {
			params['seriesid'] = this.seriesid;
		}

		if (this.episodeid !== undefined) {
			params['episodeid'] = this.episodeid;
		}

		this.configService.getConfig().subscribe(config => {
			this.config = config;

			this.eventService.getEvents(params).subscribe(events => {
				this.events = events;
			});
		});
	}
}
