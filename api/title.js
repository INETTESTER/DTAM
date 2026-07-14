import http from 'k6/http';
import { cookie } from './env.js';

export function title() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/title';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(response.body);
    return response;
}