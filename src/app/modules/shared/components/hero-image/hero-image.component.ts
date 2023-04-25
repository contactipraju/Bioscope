import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero-image',
	templateUrl: './hero-image.component.html',
	styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
	@Input() imagePath: string;
	@Input() fallbackImage?: string;
	@Input() type: string;

	constructor() { }

	ngOnInit(): void {
	}
}
