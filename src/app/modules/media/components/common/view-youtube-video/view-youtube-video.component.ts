import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-view-youtube-video',
	templateUrl: './view-youtube-video.component.html',
	styleUrls: ['./view-youtube-video.component.scss']
})
export class ViewYoutubeVideoComponent implements OnInit {
	@Input() key: string;

	constructor() { }

	ngOnInit(): void {
	}
}
