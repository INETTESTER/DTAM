import http from 'k6/http';
import { cookie } from './env.js';

export function history() {
    const url = 'https://uat-dtamnext.one.th/api/v1/person/history/35?page=1&limit=10';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}