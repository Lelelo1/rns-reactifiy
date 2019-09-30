import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout } from "react-nativescript";
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { Frame, Page, Color } from 'tns-core-modules/ui/frame/frame';
import { MyContentView, MyButton } from '~/Reactified/Reactified';
import { Label } from 'tns-core-modules/ui/label/label';
import { _Label as LabelComponent } from "react-nativescript/dist/components/Label";
// import { Button } from 'tns-core-modules/ui/button/button';

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();
    // private readonly myButtonRef = React.createRef<Button>();
    componentDidMount(){
        const frame: Frame = this.props.forwardedRef.current!;
        frame.navigate({
            create: () => {
                const page: Page = this.pageRef.current!;
                page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!
                return page;
            }
        });
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    
            
                    <$StackLayout>
                    <MyButton backgroundColor={new Color("green")}/>
                    <MyButton backgroundColor={new Color("green")}/>
                    <MyContentView width={200} height={250} backgroundColor={new Color("orange")}>
                        <$Button text={"hello"}/>
                    </MyContentView>
                    <MyContentView width={200} height={250} backgroundColor={new Color("orange")}>
                        <$Button text={"hello"}/>
                    </MyContentView>
                    <MyContentView width={200} height={250} backgroundColor={new Color("orange")}>
                        <$Button text={"hello"}/>
                    </MyContentView>
                        <$Button text={"test"} onTap={() => {
                            console.log("tap");
                            const forwardRef = React.createRef<Label>();
                            const RNSLabel = Reactified(new Label());
                            const rLabel = new RNSLabel({ forwardedRef : forwardRef});
                            const cLabel = new LabelComponent(null);

                        }}/>
                    </$StackLayout>
                </$Page>
            </$Frame>
        );
    }
}
// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.