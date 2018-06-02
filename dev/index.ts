import {
	detectEnv, hasEnv,
	EBrowser, EDeviceCategory,
} from "../src";

console.log('detected', {detectEnvironment: detectEnv});

if (typeof document !== "undefined")
	document.write(
		JSON.stringify({detectEnvironment: detectEnv}, null, 4)
			.split("\n")
			.join('<br/>')+
		'<br/>'+
		'<br/>'+
		`is chrome ${hasEnv(EBrowser.chrome)}`+'<br/>'+
		`is firefox ${hasEnv(EBrowser.firefox)}`+'<br/>'+
		`is desktop and chrome ${hasEnv([EDeviceCategory.desktop, EBrowser.chrome])}`+'<br/>'+
		`is desktop and firefox ${hasEnv([EDeviceCategory.desktop, EBrowser.firefox])}`+'<br/>'+
		`is desktop or chrome ${hasEnv([EDeviceCategory.desktop, EBrowser.chrome], false)}`+'<br/>'+
		`is desktop or firefox ${hasEnv([EDeviceCategory.desktop, EBrowser.firefox], false)}`+'<br/>'+
		'<br/>'
	);
