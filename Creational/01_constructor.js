class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }
    getUrl = function() {
        return `https://${this.ip}:80`
    }
}

let aws = new Server('aws-german', '23.23.23.23')

console.log(aws.getUrl())