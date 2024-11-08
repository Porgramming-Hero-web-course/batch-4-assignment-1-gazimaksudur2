class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const curYear = new Date().getFullYear();
        return curYear - this.year;
    }
}


const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());