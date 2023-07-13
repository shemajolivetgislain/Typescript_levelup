class Department{
    name: string;
    constructor(n:string){
        this.name = n;
    }
    describe(this:Department){
        console.log("function Of Department", this.name);
    }
}

const objectDepts = new Department("Information Technology");
console.log(objectDepts.describe)
objectDepts.describe;
