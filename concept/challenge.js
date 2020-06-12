// QUESTION 1
class Admin {
    constructor(admin = true) {
        this.isAdmin = admin;
    }
}

class User extends Admin {
    constructor(email, password, admin) {
        super();

        this.email = email;
        this.password = password;
        // this.isAdmin = admin;
    }

    getAdmin() {
        return this.isAdmin;
    }
}

const admin1 = new Admin();
console.log(admin1);

const user1 = new User('rafaelbatistacg@gmail.com', '123');
console.log(user1.getAdmin());

// QUESTION 2