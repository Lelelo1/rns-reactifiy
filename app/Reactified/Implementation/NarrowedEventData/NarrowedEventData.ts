
import { WebView } from "react-nativescript/dist/client/ElementRegistry";
import { LoadEventData } from "tns-core-modules/ui/web-view/web-view";
/* narrowed event data introduced in rns v0.13 */

export interface NarrowedLoadEventData extends LoadEventData {
    object: WebView;
}