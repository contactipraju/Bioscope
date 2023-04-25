import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

// import isNil   from 'lodash-es/isNil';
// import isEmpty from 'lodash-es/isEmpty';

import { DateFormats } from '@app/utils/date';
import { IEvent, ISeries }  from '@app/modules/media/models/media.interface';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	constructor(
		private http: HttpClient,
		@Inject('BASE_URL') private baseUrl: string
	) {
	}

	private getUrl() {
		return this.baseUrl + 'assets/json/events.json';
	}

	private filterEvents(series: IEvent[], params: any) {
		//if(!isNil(previousLocal) && !isEmpty(previousLocal)) { //TODO
		if(params && params['subcategory']) {
			let filtered = series.filter(function(ser) {
			return !(  (params['category']    && params['category']    !== ser['category'])
					|| (params['subcategory'] && params['subcategory'] !== ser['subcategory'])
					|| (params['seriesid']    && params['seriesid']    !== ser['id']));
			});

			return filtered;
		}
		else {
			return series;
		}
	}

	public processEvents = (events: ISeries[]) => {
		for(let i = 0; i < events.length; i++) {
			let event: ISeries = events[i];
			event.startDate = new Date(event.startDate!);
			event.endDate   = new Date(event.endDate ? event.endDate : event.startDate);
	
			event.startDateFormatted = DateFormats.formattedDate(event.startDate);
			event.endDateFormatted   = DateFormats.formattedDate(event.endDate);
	
			for(let j = 0; j < event.episodes!.length; j++) {
				let episode = event['episodes']![j];
				episode.color     = event.color;
	
				episode.startDate = new Date(episode.startDate!);
				episode.endDate   = new Date(episode.endDate ? episode.endDate : episode.startDate);
	
				episode.startDateFormatted = DateFormats.formattedDate(episode.startDate);
				episode.endDateFormatted   = DateFormats.formattedDate(episode.endDate);
			}
		}
	
		return events;
	}

	public getEvents(s: any): Observable<IEvent[]> {
		return this.http.get<IEvent[]>(this.getUrl()).pipe(
			map((resp) => {
				let filtered = this.filterEvents(this.processEvents(resp), s);
				return filtered;
			})
		);
	}

	public createEvent(event: IEvent): Observable<any> {
		return this.http.post<IEvent>(this.getUrl(), event);
	}

	public updateEvent(event: IEvent): Observable<any> {
		return this.http.put<IEvent>(this.getUrl(), event);
	}

	public deleteEvent(event: IEvent): Observable<any> {
		return this.http.delete<IEvent>(this.getUrl(), <any>event);
	}
}
