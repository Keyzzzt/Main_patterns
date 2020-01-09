// // структурные дизайн паттерны, позволяют встроить новый функционал не затрагивая старый функционал


// class OldCalc {
//     operation(num1, num2, operation) {
//         switch (operation) {
//             case 'add':
//                 return num1 + num2
//             case 'sub':
//                 return num1 - num2
//             default:
//                 return NaN
//         }
//     }
// }

// class NewCalc {
//     add(num1, num2) {
//         return num1 + num2
//     }
//     sub(num1, num2) {
//         return num1 - num2
//     }
// }

// class CalcAdapter {
//     constructor() {
//         this.calc = new NewCalc
//     }

//     operation(num1, num2, operation) {
//         switch (operation) {
//             case 'add':
//                 return this.calc.add(num1, num2)
//             case 'sub':
//                 return this.calc.sub(num1, num2)
//             default:
//                 return NaN
//         }
//     }
// }

// const oldCalc = new OldCalc()
// console.log(oldCalc.operation(10, 10, 'add'))

// const newCalc = new NewCalc()
// console.log(newCalc.add(10, 10))

// const adapter = new CalcAdapter()
// console.log(adapter.operation(10, 10, 'add'))