import {makeAutoObservable} from "mobx";

class SnackbarStore {
    enabled = false;
    severity = "success";
    text = ""
    constructor() {
        makeAutoObservable(this);
    }

    enable(severity, text) {
        this.enabled = true;
        this.severity = severity;
        this.text = text;
    }

    disable() {
        this.enabled = false;
    }
}

export default new SnackbarStore();
