/* Angular Modules */
import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '@app/modules/shared/shared.module';

/* Services */
import { ConfigService } from './services/config.service';
import { FilterService } from './services/filter.service';
import { RouteService }  from './services/route.service';
import { UtilsService }  from './services/utils.service';

/* Layout Components */
import { ArticleComponent }   from '../core/components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { LhsComponent }    from './components/lhs/lhs.component';
import { MenuComponent }   from './components/menu/menu.component';

const services = [
	ConfigService,
	FilterService,
	RouteService,
	UtilsService
];

const components = [
	ArticleComponent,
	FooterComponent,
	LhsComponent,
	MenuComponent
];

@NgModule({
	declarations: [...components],
	imports: [
		SharedModule
	],
	exports: [...components],
	providers: [...services]
})
export class CoreModule {}
