import Mock from 'axios-mock-adapter';
import axios from 'axios';
import city from './data/city';
import cc from './data/list';
export default {
    bootstrap () {
        let mock = new Mock(axios);
        mock.onPost('/city').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, city]);
            });
        });
        mock.onGet('/list').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, cc]);
            });
        });
    }
};