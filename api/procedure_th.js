import http from 'k6/http';
import { cookie } from './env.js';

export function procedure_th() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/procedure-th?search=&limit=20&search_arr=';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}