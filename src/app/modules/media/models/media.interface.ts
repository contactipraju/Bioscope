export interface IImage {
	path?: string;
	description?: string;
	thumbnail?: boolean;
	show?: boolean;
}

export interface IEvent {
	id?: string;
	name?: string;
	description?: string;
	speakers?: string[];

	category?: string;
	subcategory?: string;

	type?: string;
	color?: string;
	comments?: string;

	rj?: number;
	participants?: number[];
	flyer?: string;
	images?: IImage[];
	seriesId?: string; // TODO: Cleanup later
	ytKey?: string; // YouTube video key

	startDate?: Date;
	endDate?: Date;

	// For displaying in Events Table
	startDateFormatted?: string;
	endDateFormatted?: string;

	// For the calendar inputs in edit-calendar
	startDateInputFormat?: string;
	endDateInputFormat?: string;
}

export interface IEpisode extends IEvent {
	speakers?: string[];
}
  
export interface ISeries extends IEvent {
	episodeId?: string;
	episodes?: IEpisode[];
	category?: string;
	subcategory?: string;
	program?: string;
}
