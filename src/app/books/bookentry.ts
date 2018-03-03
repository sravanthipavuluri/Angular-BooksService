export class bookentry{
    bookName:string;
    authorName:string;
    quantity:number;

    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}