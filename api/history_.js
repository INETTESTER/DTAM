import http from 'k6/http';
import { cookie_app, timeout } from './env.js';

export function history_() {
    const url = 'https://uat-dtamnext.one.th/api/v1/patient/history?sort=DESC&page=1&limit=10';

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