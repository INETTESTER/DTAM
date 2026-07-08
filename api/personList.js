import http from 'k6/http';
import { cookie } from './env.js';

export function personList() {
    const url = 'https://uat-dtamnext.one.th/api/v1/person/person-list?search=&page=1&limit=10';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}