import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout } from "react-nativescript";
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { Frame, Page, Color } from 'tns-core-modules/ui/frame/frame';
<<<<<<< HEAD
import { Reactified } from '~/Reactified/Reactified';

import { Label } from 'tns-core-modules/ui/label/label';
import { _Label as LabelComponent } from "react-nativescript/dist/components/Label";
import { Button } from 'tns-core-modules/ui/button/button';
=======

import { Label } from 'tns-core-modules/ui/label/label';
import { _Label as LabelComponent } from "react-nativescript/dist/components/Label";
import { RNSFriendlyFormattedString } from "react-nativescript/dist/components/FormattedString";
import { Button } from 'react-nativescript/dist/client/ElementRegistry';
import { Reactified } from "../Reactified/Reactified";

class MyFancyButton extends Button{

}
const MyButton = Reactified(new MyFancyButton(), "button");

const bb = new MyButton(null);

>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
// import { Button } from 'tns-core-modules/ui/button/button';

class MyFancyButton extends Button {

}

const MyButton = Reactified(new Button(), "button");


interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();
<<<<<<< HEAD
    private readonly myFancyButtonRef: React.RefObject<MyFancyButton> = React.createRef<MyFancyButton>();
=======
    // private readonly myButtonRef = React.createRef<Button>();
    
>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
    componentDidMount(){


        const frame: Frame = this.props.forwardedRef.current!;
        frame.navigate({
            create: () => {
                const page: Page = this.pageRef.current!;
                page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!
                return page;
            }
        });
<<<<<<< HEAD
        setTimeout(() => {
            const myFancyButton = this.myFancyButtonRef.current;
            myFancyButton.backgroundColor = new Color("silver");
            myFancyButton.on("tap", (event) => {
                console.log("tap");
            })
        },2000)
=======


>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    
            
                    <$StackLayout>
<<<<<<< HEAD
                    <MyButton
                        forwardedRef={this.myFancyButtonRef}
                        backgroundColor={new Color("green")}
                        width={120}
                        height={40}
                    />
                    <MyButton backgroundColor={new Color("orange")} width={100} height={20} />
=======
                    <MyButton backgroundColor={new Color("green")} height={300} width={50} />
                    <MyButton backgroundColor={new Color("green")} height={300} width={50} />
                    
>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
                        <$Button text={"test"} onTap={() => {
                            console.log("tap");
                        }}
                        >
                            <$FormattedString />    
                        </$Button>
                    </$StackLayout>
                </$Page>
            </$Frame>
        );
    }
}
// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.