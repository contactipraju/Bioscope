import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import { IEpisode, ISeries } from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-watch-episode',
	templateUrl: './watch-episode.component.html',
	styleUrls: ['./watch-episode.component.scss']
})
export class WatchEpisodeComponent implements OnInit {
	episode: IEpisode;
	series: ISeries;

	constructor(
		public modalRef: BsModalRef
	) { }

	ngOnInit(): void {
	}
}
