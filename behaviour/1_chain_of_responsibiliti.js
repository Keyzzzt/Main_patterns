// Поведенческие паттерны позволяют улучшить коммуникацию между обьектами разного типа

// данный паттрен позволяет последовательно вызывать у одного и того-же обьекта
// различные методы по отношению к одному объекту

class mySum{
    constructor(initialValue = 42) {
        this.sum = initialValue
    }
    add(value) {
        this.sum += value
        return this
    }
    sub(value) {
        this.sum -= value
        return this
    }
}

const sum1 = new mySum();
const sum2 = new mySum();

console.log(sum1.add(8).add(10).sub(20));
console.log(sum2.sub(10).add(2).sub(2).add(30));