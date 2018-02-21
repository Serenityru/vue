import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data/name.json';
import getdata from './data/itemList.json';
const mock = new MockAdapter(axios);
export default {
    bootstrap () {
        mock.onPost('/api/login').reply((config) => {
            const user = config.params.username;
            const json = data.find((v, k) => {
                if (v.name === user) {
                    return v;
                }
            });
            return new Promise((resolve, reject) => {
                resolve([200, json]);
            });
        });
        mock.onGet('/getList').reply((config) => {
            let uid = config.params.uid;
            return new Promise((resolve, reject) => {
                resolve([200, getdata.slice(0, uid)]);
            });
        });
    }
};