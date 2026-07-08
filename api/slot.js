import http from 'k6/http';
import { cookie } from './env.js';

export function slot() {
    const url = 'https://uat-dtamnext.one.th/api/v1/slot?uid=31&date=2026-07-10';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}