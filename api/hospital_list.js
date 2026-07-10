import http from 'k6/http';
import { cookie } from './env.js';

export function hospital_list() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/hospital-list?search=&limit=20&search_arr=';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}