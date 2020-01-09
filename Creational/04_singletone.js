// в этом паттерне должен быть только один инстанс класс
// исползуется например для подключения к базе данных, чтобы избежать повторного подключения

class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())


//вурнет все равно 'MongoDB'
const mySQL = new Database('mySQL')
console.log(mongo.getData())

//вурнет все равно 'MongoDB'
const my2 = new Database('my2')
console.log(mongo.getData())