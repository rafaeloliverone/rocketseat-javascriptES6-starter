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

