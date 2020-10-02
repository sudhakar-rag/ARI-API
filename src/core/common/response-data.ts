export class ResponseData {
    public status = true;
    public data: any = {};
    public message = '';
    constructor() {

    }

    reset() {
        this.status = true;
        this.message = '';
        this.data = {};
    }
}