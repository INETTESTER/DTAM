import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function bornTime() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/born-time';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(response.body);
    return response;
}