import * as React from "react";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { ExtraProps } from "./ExtraProps";
import { updateListenersHelperImpl } from "./Implementation/updateListenersHelperImpl";
import { getCurrentRefImpl } from "./Implementation/getCurrentRefImpl";
import { Observable } from "react-nativescript/dist/client/ElementRegistry";
import { updateListenersImpl } from "./Implementation/updateListenersImpl";
import { shouldComponentUpdateImpl } from "./Implementation/React/shouldComponentUpdateImpl";
import { componentWillUnmountImpl } from "./Implementation/React/componentWillUnmountImpl";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";
import { CustomNodeHierarchyManager } from "react-nativescript/dist/shared/HostConfigTypes";
import { __customHostConfigAppendChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl";
import { __customHostConfigRemoveChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl";
import { __customHostConfigInsertBeforeImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl";
import { EventData } from "tns-core-modules/data/observable/observable";
import { onDataChangeImpl } from "./Implementation/Unique/onDataChangeImpl";
import { componentDidMountImpl } from "./Implementation/React/componentDidMountImpl";

/* declared here in seperate file so class can be accessed from impl files*/