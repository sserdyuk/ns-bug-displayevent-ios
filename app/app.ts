/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';

application.on(application.displayedEvent, function (args: application.ApplicationEventData) {
    console.log("Display never fires: " + args.ios);
});

application.on(application.resumeEvent, function (args: application.ApplicationEventData) {
    console.log("Resume fired: " + args.ios);
});
  

application.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
