import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function countTab() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/count-tab?pid=&service_id=&service_point_id=&date=';

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