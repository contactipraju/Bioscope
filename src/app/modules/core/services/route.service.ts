import { Injectable }     from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RouteService {

	constructor(private route: ActivatedRoute) {
	}

	getPath() {
		let path = [];
		path[0] = this.route.snapshot.parent!.routeConfig!.path;

		if(this.route && this.route.snapshot && this.route.snapshot.url && this.route.snapshot.url.length) {
			for (let i=0; i<this.route.snapshot.url.length; i++) {
				path[i+1] = this.route.snapshot.url[i].path;
			}
		}

		return path;
	}

	getParams() {
		return this.route.snapshot.queryParams;
	}
}
