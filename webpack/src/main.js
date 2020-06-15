import axios from 'axios';

const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executPromise() {
    console.log(await myPromise());
    console.log(await myPromise());
}

executPromise();

// AXIOS

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn(error);
        }
    }
}

Api.getUserInfo('rafaeloliverone');


// APLICATION ES6+

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();

    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat',
            description: 'Tire a  sua ideia do papel e dê vida.',
            avatar_url: 'https://avatars2.githubusercontent.com/u/48067346?v=4',
            html_url: 'https://github.com/rafaeloliverone'
        });

        this.render();
        // console.log(this.repositories);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let elementList = document.createElement('li');
            elementList.appendChild(imgEl);
            elementList.appendChild(titleEl);
            elementList.appendChild(descriptionEl);
            elementList.appendChild(linkEl);

            this.listEl.appendChild(elementList);

        });
    }
}

new App();