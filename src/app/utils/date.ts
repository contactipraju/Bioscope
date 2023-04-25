import * as moment from 'moment';

export class DateFormats {
	static formattedDate(date: Date): string {
		return moment(date).format("D MMM YYYY");
	}
}
