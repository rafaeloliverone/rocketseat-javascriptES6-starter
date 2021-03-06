// CLASS
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.user = 'Rafael';
    }

    showUser() {
        console.log(this.user);
    }
}

var MyList = new TodoList();

document.getElementById('button').onclick = function() {
    MyList.add('New value');
}

MyList.showUser();

// method static 
// do not need to instantiate and function depends only on it

class Matha {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matha.soma(5, 10));


// const is allowed only mutation
const user = { name: 'Rafael'};

user.name = 'Julia';
console.log(user);


// ARRAY OPERATIONS
const array = [1, 3, 5, 4, 6, 8, 9];

const newArray = array.map(function(item, index) {
    return item+index;
});
console.log(newArray);

const sum = array.reduce(function(total, next) {
    return total + next;
});
console.log(sum);

const filter = array.filter(function(item) {
    return item % 2 === 0;
});
console.log(filter);

const find = array.find(function(item) {
    return item === 4;
})
console.log(find);


// VALUES DEFAULTS
const soma = function(a = 2, b = 5) {
    return a + b;
}

// with arrow function
const soma2 = (a = 2, b = 5) => a + b;

console.log(soma(1));
console.log(soma());


// ARROW FUNCTIONS 
const pair = [2, 4, 6, 8, 10];

const squadPair = pair.map((item) => {
    return item**2;
});

// another way
const squadPair2 = pair.map((item) => item**2 );

console.log(squadPair);


const test = () => {
    return 'teste';
}

const test2 = () => 'teste';

console.log(test());


// DISRUPTION
const username = {
    name: 'Rafael',
    year: 20,
    address: {
        street: 'Walfredo Macedo',
        neightboard: 'Quarenta',
        number: 564
    }
};

// const name1 = username.name;
// const year1 = username.year
// const street1 = username.address.street;

const { name, year, address: { street, number } } = username;
console.log(`${street} - ${number}`);


function showUsername({ name, year, address: {neightboard} }) {
    return `${name} - ${neightboard}`;
}

console.log(showUsername(username));


// REST OPERATOR 
const company2 = {
    company: 'Google',
    description: 'Good company',
    skills: 'Web'
};

const { company, ...rest } = company2;
console.log(rest); 


const numbers = [1, 2, 3, 4, 5, 6];

const [a, b , ...c] = numbers ;

function sumMoreOne(...params) {
    return params.map( (number) => number + 1 );
}

console.log(sumMoreOne(1, 2, 3, 4));


// SPREAD OPERATOR
const array1  = [1, 2, 4];
const array2 = [5, 6, 8];

const array3 = [ ...array1, ...array2 ];
console.log(array3);


const company3 = {
    nameCompany: 'Google',
    description1: 'Good company',
    skills1: 'Web'
};

const copyCompany = { ...company3, skills1: 'Design' };
console.log(copyCompany);


// OBJECT SHORT SYNTAX
const nameGuest = 'Rafael';
const yearGuest =  20;

const guest = {
    nameGuest,
    yearGuest,
    code: '1404'
}

console.log(guest);