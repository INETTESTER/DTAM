import http from 'k6/http';
import { cookie } from './env.js';

export function calendar() {
    const url = 'https://uat-dtamnext.one.th/api/v1/slot/calendar?uid=31&month=2026-07';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}