
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { Dock } from "tns-core-modules/ui/layouts/dock-layout/dock-layout";
import { View as NativeScriptView, ShownModallyData } from "tns-core-modules/ui/core/view/view";
import {
    GestureEventData,
    GestureTypes,
    TouchGestureEventData,
    SwipeGestureEventData,
    RotationGestureEventData,
    PinchGestureEventData,
    PanGestureEventData,
} from "tns-core-modules/ui/gestures/gestures";


// should extras be on every rns component?
export type ExtraProps<T extends Observable> = ObservableProps<T> & ViewBaseProps & ViewProps;

interface ObservableProps<T extends Observable> {
    elementKey?: string // added
    forwardedRef?: React.RefObject<T>;
    onPropertyChange?: (data: EventData) => void;
}

interface ViewBaseProps {
    __rns__nodeTreeRole?: string;
    dock?: Dock;
}
interface ViewProps {
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
