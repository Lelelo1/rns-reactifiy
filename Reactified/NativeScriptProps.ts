import { Base } from "./Implementation/Types";

/* shirakaba has made a file in rns that picks all
 the suitable natievscript component properties:
 https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/shared/NativeScriptComponentTypings.ts#L123 */

import {
    Observable,
    ViewBase,
    View,
    ContentView,
    Page,
    Frame,
    TabView,
    TabViewItem,
    ActionItem,
    NavigationButton,
    TextBase,
    EditableTextBase,
    TextView,
    TextField,
    ContainerView,
    // CustomLayoutView
    Repeater,
    LayoutBase,
    FlexboxLayout,
    DockLayout,
    GridLayout,
    StackLayout,
    WrapLayout,
    AbsoluteLayout,
    ListView,
    HtmlView,
    WebView,
    ActionBar,
    Button,
    Image,
    ActivityIndicator,
    DatePicker,
    ListPicker,
    Switch,
    TimePicker,
    Progress,
    ScrollView,
    SearchBar,
    SegmentedBar,
    Slider,
    /* FormattedString missing */
    /* Span missing */
} from "react-nativescript/dist/client/ElementRegistry";

import { FormattedString, Span } from "tns-core-modules/text/formatted-string";


import { 
    ObservableProps as RNSObservableProps,
    ViewBaseProps as RNSViewBaseProps,
    ViewProps as RNSViewProps,
    ContentViewProps as RNSContentViewProps,
    PageProps as RNSPageProps,
    FrameProps as RNSFrameProps,
    TabViewProps as RNSTabViewProps,
    TabViewItemProps as RNSTabViewItemProps,
    ActionItemProps as RNSActionItemProps,
    NavigationButtonProps as RNSNavigationButtonProps,
    TextBaseProps as RNSTextBaseProps,
    EditableTextBaseProps as RNSEditableTextBaseProps,
    TextViewProps as RNSTextViewProps,
    TextFieldProps as RNSTextFieldProps,
    ContainerViewProps as RNSContainerViewProps,
    // CustomLayoutViewProps as RNSCustomLayoutProps
    RepeaterProps as RNSRepeaterProps,
    LayoutBaseProps as RNSLayoutBaseProps,
    FlexboxLayoutProps as RNSFlexboxLayoutProps,
    DockLayoutProps as RNSDockLayoutProps,
    GridLayoutProps as RNSGridLayoutProps,
    StackLayoutProps as RNSStackLayoutProps,
    WrapLayoutProps as RNSWrapLayoutProps,
    AbsoluteLayoutProps as RNSAbsoluteLayoutProps,
    ListViewProps as RNSListViewProps,
    HtmlViewProps as RNSHtmlViewProps,
    WebViewProps as RNSWebViewProps,
    ActionBarProps as RNSActionBarProps,
    ButtonProps as RNSButtonProps,
    ImageProps as RNSImageProps,
    ActivityIndicatorProps as RNSActivityIndicatorProps,
    DatePickerProps as RNSDatePickerProps,
    ListPickerProps as RNSListPickerProps,
    SwitchProps as RNSSwitchProps,
    TimePickerProps as RNSTimePickerProps,
    ProgressProps as RNSProgressProps,
    ScrollViewProps as RNSScrollViewProps,
    SearchBarProps as RNSSearchBarProps,
    SegmentedBarProps as RNSSegmentedBarProps,
    SliderProps as RNSSliderProps,
    FormattedStringProps as RNSFormattedStringProps,
    SpanProps as RNSSpanProps

} from "react-nativescript/dist/shared/NativeScriptComponentTypings";

export type NativeScriptProps<T extends Base> = ObservableProps<T> & ViewBaseProps<T>
& ViewProps<T> & ContentViewProps<T> & PageProps<T> & FrameProps<T> & TabViewProps<T> &
TabViewItemProps<T> & ActionItemProps<T> & NavigationButtonProps<T> & TextBaseProps<T> &
EditableTextBaseProps<T> & TextViewProps<T> & TextFieldProps<T> & ContainerViewProps<T> &
RepeaterProps<T> & LayoutBaseProps<T> & FlexboxLayoutProps<T> & DockLayoutProps<T> &
GridLayoutProps<T> & StackLayoutProps<T> & WrapLayoutProps<T> & AbsoluteLayoutProps<T> &
ListViewProps<T> & HtmlViewProps<T> & WebViewProps<T> & ActionBarProps<T> & ButtonProps<T> &
ImageProps<T> & ActivityIndicatorProps<T> & DatePickerProps<T> & ListPickerProps<T> &
SwitchProps<T> & TimePickerProps<T> & ProgressProps<T> & ScrollViewProps<T> & 
SearchBarProps<T> & SegmentedBarProps<T> & SliderProps<T> & FormattedStringProps<T> &
SpanProps<T>;

type ObservableProps<T> = T extends Observable ? RNSObservableProps : Empty;

type ViewBaseProps<T> = T extends ViewBase ? RNSViewBaseProps : Empty;
type ViewProps<T> = T extends View ? RNSViewProps : Empty;
type ContentViewProps<T> = T extends ContentView ? RNSContentViewProps : Empty;
type PageProps<T> = T extends Page ? RNSPageProps : Empty;
type FrameProps<T> = T extends Frame ? RNSFrameProps : Empty;
type TabViewProps<T> = T extends TabView ? RNSTabViewProps : Empty;
type TabViewItemProps<T> = T extends TabViewItem ? RNSTabViewItemProps : Empty;
type ActionItemProps<T> = T extends ActionItem ? RNSActionItemProps : Empty;
type NavigationButtonProps<T> = T extends NavigationButton ? RNSNavigationButtonProps : Empty;
type TextBaseProps<T> = T extends TextBase ? RNSTextBaseProps : Empty;
type EditableTextBaseProps<T> = T extends EditableTextBase ? RNSEditableTextBaseProps : Empty;
type TextViewProps<T> = T extends TextView ? RNSTextViewProps : Empty;
type TextFieldProps<T> = T extends TextField ? RNSTextFieldProps : Empty;
type ContainerViewProps<T> = T extends ContainerView ? RNSContentViewProps : Empty;
// export type CustomLayoutViewProps = ContainerViewProps; <- SKIPPED there is not CustomLayoutView in elementRegistry
type RepeaterProps<T> = T extends Repeater ? RNSRepeaterProps : Empty;
type LayoutBaseProps<T> = T extends LayoutBase ? RNSLayoutBaseProps : Empty;
type FlexboxLayoutProps<T> = T extends FlexboxLayout ? RNSFlexboxLayoutProps : Empty;
type DockLayoutProps<T> = T extends DockLayout ? RNSDockLayoutProps : Empty;
type GridLayoutProps<T> = T extends GridLayout ? RNSGridLayoutProps : Empty;
type StackLayoutProps<T> = T extends StackLayout ? RNSStackLayoutProps : Empty;
type WrapLayoutProps<T> = T extends WrapLayout ? RNSWrapLayoutProps : Empty;
type AbsoluteLayoutProps<T> = T extends AbsoluteLayout ? RNSAbsoluteLayoutProps : Empty;
type ListViewProps<T> = T extends ListView ? RNSListViewProps : Empty;
type HtmlViewProps<T> = T extends HtmlView ? RNSHtmlViewProps : Empty;
type WebViewProps<T> = T extends WebView ? RNSWebViewProps : Empty;
type ActionBarProps<T> = T extends ActionBar ? RNSWebViewProps : Empty;
type ButtonProps<T> = T extends Button ? RNSButtonProps : Empty;
type ImageProps<T> = T extends Image ? RNSImageProps : Empty;
type ActivityIndicatorProps<T> = T extends ActivityIndicator ? RNSActivityIndicatorProps : Empty;
type DatePickerProps<T> = T extends DatePicker ? RNSDatePickerProps : Empty;
type ListPickerProps<T> = T extends ListPicker ? RNSListPickerProps : Empty;
type SwitchProps<T> = T extends Switch ? RNSSwitchProps : Empty;
type TimePickerProps<T> = T extends TimePicker ? RNSTimePickerProps : Empty;
type ProgressProps<T> = T extends Progress ? RNSProgressProps : Empty;
type ScrollViewProps<T> = T extends ScrollView ? RNSScrollViewProps : Empty;
type SearchBarProps<T> = T extends SearchBar ? RNSSearchBarProps : Empty;
type SegmentedBarProps<T> = T extends SegmentedBar ? RNSSegmentedBarProps : Empty;
type SliderProps<T> = T extends Slider ? RNSSliderProps : Empty;
type FormattedStringProps<T> = T extends FormattedString ? RNSFormattedStringProps : Empty;
type SpanProps<T> = T extends Span ? RNSSpanProps : Empty;

/* Empty is neccesary or else props go blank. Not entirely sure why  */
interface Empty {

}







