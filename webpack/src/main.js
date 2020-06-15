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

        console.log(this.repositories);
    }
}

new App();