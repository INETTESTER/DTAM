import http from 'k6/http';
import { cookie } from './env.js';

export function session() {
    const url = 'https://uat-dtamnext.one.th/api/v1/auth/session';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}