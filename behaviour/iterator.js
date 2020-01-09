
class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }
    [Symbol.iterator](){
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return  {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}
// option 1
const iterator = new MyIterator(['This', 'is', 'iterator', 'ok'])
for (const val of iterator){
    console.log('Value', val)
}
//-------------------------------------------------------------------------------------

// option 2
// function* generator(collection) {
//     let index = 0
//     while (index < collection.length) {
//         yield collection[index++]
//     }
// }
// const gen = generator(['This', 'is', 'iterator', 'ok'])
//
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
//-------------------------------------------------------------------------------------
// option 3
// function* generator(collection) {
//     let index = 0
//     while (index < collection.length) {
//         yield collection[index++]
//     }
// }
// const gen = generator(['This', 'is', 'iterator', 'ok'])
// for (const val of gen){
//     console.log('Value', val)
// }