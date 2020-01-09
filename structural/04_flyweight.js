// // нужен для работы с данными через различные типы обьектов
// // например загрузка файлов

// class Car {
//     constructor(model, price) {
//         this.model = model
//         this.price = price
//     }
// }

// class CarFactory {
//     constructor() {
//         this.cars = []
//     }

//     create(model, price) {
//         const candidate = this.getcar(model)
//         if (candidate) {
//             return candidate
//         }
//         const newCar = new Car(model, price)
//         this.cars.push(newCar)
//         return newCar
//     }

//     getcar(model) {
//         this.cars.find(car => car.model === model)
//     }
// }

// const factory = new CarFactory()
// const bmwX6 = factory.create('bmw', 1000)
// const audi = factory.create('audi', 1200)
// const bmwX3 = factory.create('bmw', 900)


// console.log(bmwX6 === bmwX3)