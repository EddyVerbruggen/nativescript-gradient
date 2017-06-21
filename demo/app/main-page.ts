import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { device, isAndroid } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import { android } from "tns-core-modules/application";
import { HelloWorldModel } from "./main-view-model";

let model: HelloWorldModel;
let page: Page;

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    page = <Page>args.object;
    model = new HelloWorldModel();
    page.bindingContext = model;

    if (isAndroid && device.sdkVersion >= "21") {
        let window = android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#363b58").android);
    }
}