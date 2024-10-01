export class Student {  
    name: string;
    fees: number;
    id: number;

    constructor () {
        this.name = '';
        this.fees = 0;
        this.id = Math.floor(1000 + Math.random() * 9000);
    }
}