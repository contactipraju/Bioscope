import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MediaComponent } from './components/media/media.component';

const routes: Route[] = [
	{ path: '',                                            component: MediaComponent },
	{ path: ':category',                                   component: MediaComponent },
	{ path: ':category/:subcategory',                      component: MediaComponent },
	{ path: ':category/:subcategory/:seriesid',            component: MediaComponent },
	{ path: ':category/:subcategory/:seriesid/:episodeid', component: MediaComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MediaRoutingModule {}
