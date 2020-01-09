class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    responsibilities() {}
    work() {
        return `${this.name} doing ${this.responsibilities()}`
    }
    getPaid(){
        return `${this.name} have in month ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `web developer`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `tester`
    }
}

const dev = new Developer('Igor', '1500')
const test = new Tester('Vanja', '1000')

console.log(dev.getPaid())
console.log(test.responsibilities())
