import { IDialogAction } from './public';

export interface message extends EditorMessageMap {
    'query-information': {
        params: [
            tag: string,
            options?: { force?: boolean },
        ],
        result: {
            enable: boolean;
            complete: boolean;
            form: string;
        } | null,
    },
    'information-dialog': {
        params: [
            tag: string,
            options?: { [key: string]: string }
        ],
        result: IDialogAction,
    },
    'has-dialog': {
        params: [
            tag: string,
        ],
        result: boolean,
    },
    'close-dialog': {
        params: [
            tag: string,
        ],
        result: void,
    }
}
