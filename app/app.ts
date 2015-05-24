/// <reference path="../typings/tsd.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'my-app'
})
@View({
	templateUrl: './templates/myApp.html'
})

class MyAppComponent {
	appName: string;
	
	constructor() {
		this.appName = 'My Starter App';
	}
}

bootstrap(MyAppComponent);