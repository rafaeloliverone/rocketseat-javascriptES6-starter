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


var yearDuplicate = listUsers
    .map( user => {
        user.year *= 2;
        return user; 
    }) 
    .filter( 
        user => user.year <= 50
    );

console.log(yearDuplicate);


// QUESTION 3
const user4 = { name: 'Diego', year: 23 };
const showNameUser = (user) => user.name ;

console.log(showNameUser(user4));

var nameUser = 'Rafael';
var yearUser = 20; 

const formatUser = (name, year) => `${name} - ${year}`;

console.log(formatUser(nameUser, yearUser));


const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}

const promiseArrow = () => {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

console.log(promiseArrow());


// QUESTION 4 
const companyRocket = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};

var {name, address: { city, state } } = companyRocket;
console.log(name, city, state)

const userRafael = {
    name: 'Rafael',
    address: {
        city: 'Rio do Sul',
        state: 'SC'
    }
};

const showUserRafael = user => { 
    var { name, address: { city } } = user;
    return `Name: ${name} - City: ${city}`;
}

console.log(showUserRafael(userRafael));


// QUESTION 5 