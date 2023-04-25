/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { HttpClientJsonpModule }    from '@angular/common/http';

/* Pipes */
import { FilterPipe }       from './pipes/filter.pipe';

/* Layout Components */
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { TableViewComponent } from './components/table-view/table-view.component';

const pipes = [
	FilterPipe
];

const components = [
	HeroImageComponent,
	TableViewComponent
];

const modules = [
	CommonModule,
	FormsModule,
	HttpClientJsonpModule,
	HttpClientModule
];

@NgModule({
	declarations: [
		...pipes,
		...components
	],
	imports: [
		...modules
	],
	exports: [
		...pipes,
		...components,
		...modules,
	],
	providers: []
})
export class SharedModule { }
