import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame, $Button, $StackLayout } from "react-nativescript";
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { Frame, Page } from 'tns-core-modules/ui/frame/frame';
import { Reactified } from '~/Reactified/Reactified';
import { Label } from 'tns-core-modules/ui/label/label';

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();

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
                    <$ActionBar className="action-bar">
                        <$Label className="action-bar-title">Home</$Label>
                    </$ActionBar>
            
                    <$StackLayout>
                        <$Button text={"test"} onTap={() => {
                            console.log("tap");
                            const forwardRef = React.createRef<Label>();
                            const props = new Label();
                            const RNSLabel = Reactified(props);
                            const label = new RNSLabel({forwardedRef: forwardRef});
                            label.componentDidMount();
                        }}/>
                    </$StackLayout>
                </$Page>
            </$Frame>
        );
    }
}

// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.