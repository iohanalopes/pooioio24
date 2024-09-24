class Kid {
    private age: number;
    private name: string;
    
    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    
    getAge(): number {
        return this.age;
    }
    
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    toString(): string {
        return this.name + ":" + this.age.toString();
    }
}

export { Kid };