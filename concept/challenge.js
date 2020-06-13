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
var listUsers = [
    { name: 'Diego', year: 23, company: 'Rocketseat' },
    { name: 'Gabriel', year: 15, company: 'Rocketseat' },
    { name: 'Lucas', year: 30, company: 'Facebook' },
];

console.log(listUsers.map( user => user.year ));

console.log(listUsers.filter( (user) => {
    if (user.year > 18 && user.company == 'Rocketseat') {
        return user;
    } 
}))

console.log(listUsers.find( user => user.company == 'Google' ));

// console.log(listUsers.map( user => {
//     if (user.year * 2 <= 50){
//         return user;
//     } 
// }));

var yearDuplicate = listUsers
    .map( user => {
        user.year *= 2;
        return user; 
    }) 
    .filter( 
        user => user.year <= 50
    );

console.log(yearDuplicate);