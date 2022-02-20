import { Action } from "redux";

export interface ReduxAction extends Action {
    type: string;
    payload?: any;
};
