import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function drugTh() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/drug-th?search=&limit=20&search_arr=';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}