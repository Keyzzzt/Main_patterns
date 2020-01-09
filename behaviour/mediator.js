// позволяет выстраивать очень плотную и теснуб организацию разного типа

class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to){
        this.room.send(message, this, to)
    }
    receive(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor(users) {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to){
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach( key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const igor = new User('Igor')
const lena = new User('Lena')
const petr = new User('Petr')

const room = new ChatRoom()
room.register(igor)
room.register(lena)
room.register(petr)

igor.send('Hello', lena)
