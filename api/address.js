import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function address() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/address';

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