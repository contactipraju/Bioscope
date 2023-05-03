/* Angular Modules */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CoreModule } from '@app/modules/core/core.module';
import { SharedModule } from '@app/modules/shared/shared.module';
import { MediaRoutingModule } from '@app/modules/media/media-routing.module';

/* Pipes */
import { SafePipe } from './pipes/safe.pipe';

/* Services */
import { EventService } from './services/event.service';

/* Common Components */
import { MultiselectListComponent }    from './components/common/multiselect-list/multiselect-list.component';
import { ViewEpisodeDetailsComponent } from './components/common/view-episode-details/view-episode-details.component';
import { ViewSeriesComponent }         from './components/common/view-series/view-series.component'; /* TODO - WIP */
import { ViewYoutubeVideoComponent }   from './components/common/view-youtube-video/view-youtube-video.component';
import { WatchEpisodeComponent }       from './components/common/watch-episode/watch-episode.component';
import { YearCalendarComponent }       from './components/common/year-calendar/year-calendar.component';

/* Edit Components */
import { EditSeriesComponent }        from './components/edit/edit-series/edit-series.component';
import { EditEpisodeComponent }       from './components/edit/edit-episode/edit-episode.component';

/* Header Components */
import { FilterHeaderComponent } from './components/header/filter-header/filter-header.component';
import { FilterMediaComponent }  from './components/header/filter-media/filter-media.component';

/* View Components */
import { ViewCalendarComponent }      from './components/displays/view-calendar/view-calendar.component';
import { ViewTableEpisodesComponent } from './components/displays/view-table-episodes/view-table-episodes.component';
import { ViewTableSeriesComponent }   from './components/displays/view-table-series/view-table-series.component';
import { ViewTileSeriesComponent }    from './components/displays/view-tile-series/view-tile-series.component';
import { TileSeriesComponent }        from './components/displays/view-tile-series/tile-series/tile-series.component';
import { TileEpisodeComponent }       from './components/displays/view-tile-series/tile-series/tile-episode/tile-episode.component';

import { MediaComponent } from './components/media/media.component';

const pipes = [
	SafePipe
];

const services = [
	EventService
];

const components = [
	MultiselectListComponent,
	ViewEpisodeDetailsComponent,
	ViewSeriesComponent,
	ViewYoutubeVideoComponent,
	WatchEpisodeComponent,
	YearCalendarComponent,
	EditSeriesComponent,
	EditEpisodeComponent,
	FilterMediaComponent,
	FilterHeaderComponent,
	MediaComponent,
	ViewCalendarComponent,
	ViewTableEpisodesComponent,
	ViewTableSeriesComponent,
	ViewTileSeriesComponent,
	TileSeriesComponent,
	TileEpisodeComponent
];

@NgModule({
	declarations: [
		...pipes,
		...components
	],
	imports: [
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MediaRoutingModule
	],
	exports: [
		...pipes,
		...components
	],
	providers: [...services]
})
export class MediaModule {}
