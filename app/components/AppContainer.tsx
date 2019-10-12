import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout, $DatePicker, $TextField, $SegmentedBarItem, $Slider, $ActionItem, $TabView, $TabViewItem, $TimePicker, $ListView } from "react-nativescript";
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { Frame, Page, Color } from 'tns-core-modules/ui/frame/frame';
import { Reactified } from '../Reactified/Reactified';

import { _Label as LabelComponent } from "react-nativescript/dist/components/Label";
import {
    Button,
    DatePicker,
    EditableTextBase,
    TextField,
    HtmlView,
    Label,
    ListPicker,
    Placeholder,
    ScrollView,
    SearchBar,
    SegmentedBar,
    Slider,
    Switch,
    ActionItem,
    TabView,
    TabViewItem,
    StackLayout,
    TextView,
    TimePicker,
    WebView,
    View
} from 'react-nativescript/dist/client/ElementRegistry';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';
import { SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar/segmented-bar';
import { FormattedString, Span } from 'tns-core-modules/text/formatted-string';
// import { Button } from 'tns-core-modules/ui/button/button';

import { CheckBox } from "@nstudio/nativescript-checkbox";
import { CardView } from "@nstudio/nativescript-cardview";
import { PullToRefresh } from "@nstudio/nativescript-pulltorefresh";

import {parse, stringify} from "flatted";


class RNSCheckBox extends Reactified(new CheckBox()) {};


const RNSCardView = Reactified(new CardView());
/*
const RNSPullToRefresh = Reactified(new PullToRefresh());
*/

class MyFancyButton extends Button {

}


// const MyButton = Reactified(new Button(), "button");

// const MyComponent = Reactified(new TabView()); 
/*
const MyLabel = Reactified(new Label());
const MyTabView = Reactified(new TabView()); 
const MyTabViewItem = Reactified(new TabViewItem());
class MyButton extends Reactified(new Button()){};
const MySegmentedBar = Reactified(new SegmentedBar());
const MyStackLayout = Reactified(new StackLayout());
const MyScrollView = Reactified(new ScrollView());
const MyTextView = Reactified(new TextView());
const MyFormattedString = Reactified(new FormattedString());
class MySpan extends Reactified(new Span()){};
const MyTimePicker = Reactified(new TimePicker());
const MyWebView = Reactified(new WebView());
*/

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();
    private readonly stackLayoutRef: React.RefObject<StackLayout> = React.createRef<StackLayout>();
    private readonly myFancyButtonRef: React.RefObject<MyFancyButton> = React.createRef<MyFancyButton>();
    private readonly myDatePickerRef = React.createRef<DatePicker>();
    private readonly myEditableTextBaseRef = React.createRef<EditableTextBase>();
    private readonly myRNSCheckBox = React.createRef<RNSCheckBox>();
    /*
    private readonly myButtonRef = React.createRef<MyButton>();
    private readonly mySpanRef = React.createRef<MySpan>();
    */
    componentDidMount(){


        const frame: Frame = this.props.forwardedRef.current!;
        frame.navigate({
            create: () => {
                const page: Page = this.pageRef.current!;
                page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!
                return page;
            }
        });
        setTimeout(() => {
            /*
            const myFancyButton = this.myFancyButtonRef.current;
            myFancyButton.backgroundColor = new Color("silver");
            myFancyButton.on("tap", (event) => {
                console.log("tap");
            })
            */
            /*
            const myDatePicker = this.myDatePickerRef.current;
            myDatePicker.backgroundColor = new Color("green");
            myDatePicker.on("tap", (event) => {
                console.log("taaap!");
            })
            */
           /*
            this.myButtonRef.current.backgroundColor = new Color("blue");
            this.mySpanRef.current.fontSize = 30;
            this.mySpanRef.current.effectiveMarginTop = 80;
            */
            // console.log(new CheckBox() instanceof Button);
        }, 2000)
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    <$StackLayout ref={this.stackLayoutRef}>
                        <RNSCardView margin={20} className={"cardStyle"} borderColor={new Color("black")}>
                            <$StackLayout margin={40}>
                                <$Button text="Im a button"/>
                            </$StackLayout>
                        </RNSCardView>
                        

                       
                        <$Label text={"yooooooo"} />
                    </$StackLayout>
                </$Page>
            </$Frame>
        );
    }
}
/*

*/

/*
<MyTabViewItem title={"left"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
                            <MyTabViewItem title={"middle"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
                            <MyTabViewItem title={"right"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
*/


// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.