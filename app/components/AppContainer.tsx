import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout, $DatePicker, $TextField, $SegmentedBarItem, $Slider, $ActionItem, $TabView, $TabViewItem, $TimePicker } from "react-nativescript";
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { Frame, Page, Color } from 'tns-core-modules/ui/frame/frame';
import { Reactified } from '~/Reactified/Reactified';

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
    WebView
} from 'react-nativescript/dist/client/ElementRegistry';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';
import { SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar/segmented-bar';
import { FormattedString, Span } from 'tns-core-modules/text/formatted-string';
// import { Button } from 'tns-core-modules/ui/button/button';

class MyFancyButton extends Button {

}


// const MyButton = Reactified(new Button(), "button");

// const MyComponent = Reactified(new TabView()); 
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

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();
    private readonly myFancyButtonRef: React.RefObject<MyFancyButton> = React.createRef<MyFancyButton>();
    private readonly myDatePickerRef = React.createRef<DatePicker>();
    private readonly myEditableTextBaseRef = React.createRef<EditableTextBase>();
    private readonly myButtonRef = React.createRef<MyButton>();
    private readonly mySpanRef = React.createRef<MySpan>();
    
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
            this.myButtonRef.current.backgroundColor = new Color("blue");
            this.mySpanRef.current.fontSize = 30;
            this.mySpanRef.current.effectiveMarginTop = 80;
        },2000)
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    
                    <MyScrollView width={200} backgroundColor={new Color("orange")} iosOverflowSafeArea={false}>
                        <MyStackLayout height={800}>
                            <MyLabel text={"yeah I am cenetered text"} horizontalAlignment={"center"} />
                            <MyButton
                                forwardedRef={this.myButtonRef}
                                text={"don't press me"}
                                backgroundColor={new Color("gray")}
                                verticalAlignment={"middle"}
                                horizontalAlignment={"right"}
                                onTap={(args) => {
                                    console.log("I was tapped oh no!: " + args.eventName);
                                }}
                            />
                            <MyTextView>
                                <MyFormattedString>
                                    <MySpan text={"My first span"}/>
                                    <MySpan forwardedRef={this.mySpanRef} text={"My second spaan"} />
                                </MyFormattedString>
                            </MyTextView>
                            <MyWebView width={200} height={200} src={"https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/WebView.ts"} onLoadFinished={(args) => {
                                console.log(args.eventName);
                            }}
                            />
                            
                        </MyStackLayout>
                    </MyScrollView>
                </$Page>
            </$Frame>
        );
    }
}


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