const ewelink = require('ewelink-api');

class handler {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static async login() {
        const connection = new ewelink({
            email: 'iman.widayat98@gmail.com',
            password: 'imanwidayat18',
            region: 'us',
        });
    }
}