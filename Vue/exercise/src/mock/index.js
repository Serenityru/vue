import Mock from 'axios-mock-adapter';
import axios from 'axios';
import list from './data/list';
import tab from './data/tab';

export default {
    bootstrap () {
        let mock = new Mock(axios);
        mock.onPost('/users').reply((config) => {
            // const index = JSON.parse(config.data).pageIndex - 1 || 0;
            // const information = user.slice(index * 10, index * 10 + 10);
            // data.data = information;
            return new Promise((resolve, reject) => {
                resolve([200, {result: list}]);
            });
        });
        mock.onPost('/list').reply((config) => {
            // const index = JSON.parse(config.data).pageIndex - 1 || 0;
            // const information = user.slice(index * 10, index * 10 + 10);
            // data.data = information;
            return new Promise((resolve, reject) => {
                resolve([200, {result: tab}]);
            });
        });
    }
}