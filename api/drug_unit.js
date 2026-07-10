import http from 'k6/http';
import { cookie } from './env.js';

export function drug_unit() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/drug-unit?search=';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}