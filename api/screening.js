import http from 'k6/http';
import { cookie_app, timeout } from './env.js';

export function screening() {
    const url = 'https://uat-dtamnext.one.th/api/v1/patient/screening?sort=DESC&page=1&limit=10';

    const headers = {
        Cookie: '' + cookie_app,
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(response.body);
    return response;
}