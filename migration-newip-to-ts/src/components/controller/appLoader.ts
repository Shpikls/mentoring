import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8e5617824dc2434fb7044a8465cc7f0a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
