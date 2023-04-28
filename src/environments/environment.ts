// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	version: 'DEV',

	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	firebase: {
		apiKey: "AIzaSyClre3bMKOkoMbdteFd2AWd27T4CtFaeMw",
		authDomain: "bioscope-360.firebaseapp.com",
		projectId: "bioscope-360",
		storageBucket: "bioscope-360.appspot.com",
		messagingSenderId: "224168763628",
		appId: "1:224168763628:web:219599ae94f497bfaa05c9",
		measurementId: "G-LXNJXK40HE"
	},

	showConsole: {
		log: true,
		info: true,
		warn: true,
		debug: true,
		error: true
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
