
import { EventData} from "tns-core-modules/data/observable/observable";
import { Dock } from "tns-core-modules/ui/layouts/dock-layout/dock-layout";
import { ShownModallyData} from "tns-core-modules/ui/core/view/view";
import {
    GestureEventData,
    GestureTypes,
    TouchGestureEventData,
    SwipeGestureEventData,
    RotationGestureEventData,
    PinchGestureEventData,
    PanGestureEventData,
} from "tns-core-modules/ui/gestures/gestures";

import { 
    Observable,
    ViewBase,
    View,
    Page,
    ActionItem,
    DatePicker,
    EditableTextBase,
    Frame,
    GridLayout,
    HtmlView,
    ListPicker,
    Switch,
} from "react-nativescript/dist/client/ElementRegistry";

import { PageNavigationEventHandler } from "react-nativescript/dist/components/Page";
import { ItemSpec } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { ItemsSource } from "tns-core-modules/ui/list-picker/list-picker";


// export type ExtraProps<T extends Observable> = ObservableProps<T> & ViewBaseProps<T> & ViewProps<T> & PageProps<T> & ActionItemProps<T>;
export type ExtraProps<T extends Observable> = ObservableProps<T> & ViewBaseProps<T> & ViewProps<T>
 & PageProps<T> & ActionItemProps<T> & DatePickerProps<T> & EditableTextBaseProps<T> & FrameProps<T>
 & GridLayoutProps<T> & HtmlViewProps<T> & ListPickerProps<T>;

// using conditional so that RNSButton don't get navigatedTo (PageProps) 


/* 
 Should get ObservableProps
 with getter/onditional typing - since the ns component
 must be of type Observable. using below conidtional type
 also cause an type error in getCurrentRefImpl
 */
// type ObservableProps<T extends Observable> = T extends Observable ? IObservable<T> : Empty

interface ObservableProps<T extends Observable> {
    elementKey?: string // added
    forwardedRef?: React.RefObject<T>;
    onPropertyChange?: (data: EventData) => void;
}

/* rest is using conditional type "getters" so that button don't access get page's props etc*/

type ViewBaseProps<T> = T extends ViewBase ? IViewBase : Empty
interface IViewBase {
    __rns__nodeTreeRole?: string;
    dock?: Dock;
}

type ViewProps<T> = T extends View ? IView : Empty;
interface IView {
    /* From View. */
    onLoaded?: (args: EventData) => void;
    onUnloaded?: (args: EventData) => void;
    onAndroidBackPressed?: (args: EventData) => void;
    onShowingModally?: (args: ShownModallyData) => void;
    onShownModally?: (args: ShownModallyData) => void;

    /* The gesture handlers. */
    onTap?: (args: GestureEventData) => void;
    onDoubleTap?: (args: GestureEventData) => void;
    onPinch?: (args: PinchGestureEventData) => void;
    onPan?: (args: PanGestureEventData) => void;
    onSwipe?: (args: SwipeGestureEventData) => void;
    onRotation?: (args: RotationGestureEventData) => void;
    onLongPress?: (args: GestureEventData) => void;
    onTouch?: (args: TouchGestureEventData) => void;

    /* These are to be overridden in subclasses of View, so unlikely to be appropriate. */
    // onLayout?: (left: number, top: number, right: number, bottom: number) => void;
    // onMeasure?: (widthMeasureSpec: number, heightMeasureSpec: number) => void;
}

type PageProps<T> = T extends Page ? IPage : Empty
interface IPage {
    onNavigatingTo?: PageNavigationEventHandler;
    onNavigatedTo?: PageNavigationEventHandler;
    onNavigatingFrom?: PageNavigationEventHandler;
    onNavigatedFrom?: PageNavigationEventHandler;
}

type ActionItemProps<T> = T extends ActionItem ? IActionItem : Empty
interface IActionItem {
    onTap?: (args: GestureEventData) => void;
}

type DatePickerProps<T> = T extends DatePicker ? IDatePicker : Empty
interface IDatePicker {
    onDateChange?: (date: Date) => void;
}
type EditableTextBaseProps<T>= T extends EditableTextBase ? IEditableTextBase : Empty
interface IEditableTextBase {
    onBlur?: (args: EventData) => void;
    onFocus?: (args: EventData) => void;
    onTextChange?: (args: EventData) => void;
}
type FrameProps<T> = T extends Frame ? IFrame : Empty;
interface IFrame {
    onOptionSelected?: (args: EventData) => void;
}
type GridLayoutProps<T> = T extends GridLayout ? IGridLayout : Empty;
interface IGridLayout {
    /* Each constituent view passed in must bear "row" and "col" Props. */
        /* rows and columns will be added in order specified. */
    rows?: ItemSpec[];
    columns?: ItemSpec[];
}

type HtmlViewProps<T> = T extends HtmlView ? IHtmlView : Empty
interface IHtmlView {
    html: string;
}
type ListPickerProps<T> = T extends ListPicker ? IListPicker : Empty;
interface IListPicker {
    items: any[] | ItemsSource;
    onSelectedIndexChange?: (selectedIndex: number) => void;
}

/* could be used set props for every single RNS Component*/
interface Empty {

}

// inside https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Switch.ts
// can listener be attached to this:PROPS.onToggle ?