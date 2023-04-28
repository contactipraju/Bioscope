import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';
import { version } from 'src/environments/version';

import * as moment from 'moment';

@Component({
	selector: 'app-version',
	templateUrl: './version.component.html',
	styleUrls: ['./version.component.scss']
})
export class VersionComponent {
	public version: any;
	public year: number = new Date().getFullYear();
	public tooltipText: string = '';

	ngOnInit() {
		if (!environment.production) {
			version.minor += ' (DEV)';
		}

		version.date = moment(version.date).format('D-MMM-YY H:mm');

		this.version = version;
		this.tooltipText = version["major"] + version["minor"] + ', Rev: ' + version["rev"] + ', on: ' + version["date"];
	}
}
