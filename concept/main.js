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


