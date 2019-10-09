
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
    ScrollView,
    SearchBar,
    SegmentedBar,
    Slider,
    TabView
} from "react-nativescript/dist/client/ElementRegistry";

import { PageNavigationEventHandler } from "react-nativescript/dist/components/Page";
import { ItemSpec } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { ItemsSource } from "tns-core-modules/ui/list-picker/list-picker";
import { CreateViewEventData, Placeholder } from "tns-core-modules/ui/placeholder/placeholder";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view/scroll-view";
import { SelectedIndexChangedEventData as SegmentedBarSelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar/segmented-bar";
import { SelectedIndexChangedEventData as TabViewSelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';

// export type ExtraProps<T extends Observable> = ObservableProps<T> & ViewBaseProps<T> & ViewProps<T> & PageProps<T> & ActionItemProps<T>;

export type ExtraProps<T extends ViewBase> = ObservableProps<T> & ViewBaseProps<T> & ViewProps<T>
 & PageProps<T> & ActionItemProps<T> & DatePickerProps<T> & EditableTextBaseProps<T> & FrameProps<T>
 & GridLayoutProps<T> & HtmlViewProps<T> & ListPickerProps<T> & PlaceholderProps<T> & ScrollViewProps<T>
 & SearchBarProps<T> & SegmentedBarProps<T> & SliderProps<T> & SwitchProps<T> & TabViewProps<T>;



interface ObservableProps<T extends Observable> {
    elementKey?: string // added
    forwardedRef?: React.RefObject<T>;
    onPropertyChange?: (data: EventData) => void;
}

/* rest is using conditional type "getters" so that button don't access get page's props etc*/

type ViewBaseProps<T> = T extends ViewBase ? IViewBase<T> : Empty
interface IViewBase<T> {
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

type PlaceholderProps<T> = T extends Placeholder ? IPlaceholder : Empty
interface IPlaceholder {
    onCreatingView?(args: CreateViewEventData): void;
}

type ScrollViewProps<T> = T extends ScrollView ? IScrollView : Empty;
interface IScrollView {
    onScroll?: (args: ScrollEventData) => void;
}

type SearchBarProps<T> = T extends SearchBar ? ISearchBar : Empty;
interface ISearchBar {
    onTextChange?: (text: string) => void;
    onSubmit?: (args: EventData) => void;
    onClose?: (args: EventData) => void;
}

type SegmentedBarProps<T> = T extends SegmentedBar ? ISegmentedBar : Empty
interface ISegmentedBar {
    onSelectedIndexChange?: (args: SegmentedBarSelectedIndexChangedEventData) => void;
}

type SliderProps<T> = T extends Slider ? ISlider : Empty;
interface ISlider {
    onValueChange?: (args: number) => void;
}

type SwitchProps<T> = T extends Switch ? ISwitch : Empty;
interface ISwitch {
    onToggle?: (checked: boolean) => void;
}

type TabViewProps<T> = T extends TabView ? ITabView : Empty;
interface ITabView {
    onSelectedIndexChange?(args: TabViewSelectedIndexChangedEventData): void;
}

/* could be used set props for every single RNS Component*/
interface Empty {

}

// inside https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Switch.ts
// can listener be attached to this:PROPS.onToggle ?