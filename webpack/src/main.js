const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executPromise() {
    console.log(await myPromise());
    console.log(await myPromise());
}

executPromise();