export class Resources {
    public id?: number;
    public name?: string;
    public price?: number;
    // constructor(
    //     id: number,
    //     name: string,
    //     price: number
    // ) {
    //     this.id = id;
    //     this.name = name;
    //     this.price = price;
    // }
}


export class Student{
    public id?:number
    public name!:string;
    public age!:string;
    public address!:string;
    public skills!:Skill[]
}

export class Skill{
    public title!:string;
    public cartification!:string;
}