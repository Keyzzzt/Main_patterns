class SimpleMembershuip {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name
        this.cost = 300
    }
}

class PremiumMembershuip {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembershuip,
        standart: StandartMembership,
        premium: PremiumMembershuip
    }
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()
const members = [
    factory.create('Igor', 'simple'),
    factory.create('Natasha', 'premium'),
    factory.create('Danik', 'standart')
]


members.forEach( m => {
    m.define()
})