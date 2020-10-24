export class ResponseData {
    public status = true;
    public data: any = {};
    public message = '';


    reset(): void {
        this.status = true;
        this.message = '';
        this.data = {};
    }
}