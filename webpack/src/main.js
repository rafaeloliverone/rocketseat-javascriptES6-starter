import axios from 'axios';
import api from './api';

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
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();

    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if (loading == true) {
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Loading'));
            loadEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        
        if (repoInput.length === 0) {
            return;
        }

        this.setLoading();
        
        try {
            const response = await api.get(`${repoInput}`);

            const { name, description, html_url, owner: {avatar_url} } = response.data

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url, 
            });

            this.inputEl.value = '';

            this.render();
        } catch (error) {
            alert('Repository not found');
        }

        this.setLoading(false);
        
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