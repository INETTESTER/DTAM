import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function dropdown_user() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/dropdown-user';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
        timeout: timeout,
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}