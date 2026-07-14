import http from 'k6/http';
import { cookie_app, timeout } from './env.js';

export function notification() {
    const url = 'https://uat-dtamnext.one.th/api/v1/notification';

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