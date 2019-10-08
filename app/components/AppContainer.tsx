import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $Switch, $Frame, $Button, $StackLayout, $DatePicker, $TextField, $SegmentedBarItem, $Slider, $ActionItem, $TabView, $TabViewItem } from "react-nativescript";
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
    StackLayout
} from 'react-nativescript/dist/client/ElementRegistry';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';
import { SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar/segmented-bar';
// import { Button } from 'tns-core-modules/ui/button/button';

class MyFancyButton extends Button {

}


// const MyButton = Reactified(new Button(), "button");

// const MyComponent = Reactified(new TabView()); 
const MyLabel = Reactified(new Label());
const MyTabView = Reactified<TabView>(new TabView()); 
const MyTabViewItem = Reactified(new TabViewItem());
const MyButton = Reactified(new Button());
const MySegmentedBar = Reactified(new SegmentedBar());
const MyStackLayout = Reactified(new StackLayout());
const MyScrollView = Reactified(new ScrollView());

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();
    private readonly myFancyButtonRef: React.RefObject<MyFancyButton> = React.createRef<MyFancyButton>();
    private readonly myDatePickerRef = React.createRef<DatePicker>();
    private readonly myEditableTextBaseRef = React.createRef<EditableTextBase>(); // (won't show)
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

        },2000)
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    <$ActionBar>
                        <$ActionItem text={"Check this out"} onTap={() => {
                            console.log("tap");
                        }}/>
                    </$ActionBar>
                    <MyScrollView width={200} >
                        <MyButton text={"a button"} />
                        <MyLabel text={"laaaabel"} backgroundColor={new Color("silver")}/>
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