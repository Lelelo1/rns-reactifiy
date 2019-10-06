import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout, $DatePicker, $TextField, $SegmentedBarItem, $Slider, $ActionItem } from "react-nativescript";
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
    ActionItem
} from 'react-nativescript/dist/client/ElementRegistry';
// import { Button } from 'tns-core-modules/ui/button/button';

class MyFancyButton extends Button {

}


// const MyButton = Reactified(new Button(), "button");

const MyComponent = Reactified(new Switch()); 
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
            
                    <$StackLayout>
                        <MyComponent onTap={() => {
                            console.log("tap");
                        }}/>
                        <$Switch onToggle={(checked) => {
                            console.log("checked: " + checked);
                        }}
                        onTap={() => {
                            console.log("tap");
                        }}
                        />
                    </$StackLayout>
                </$Page>
            </$Frame>
        );
    }
}
// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.