import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function countTab() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/count-tab?pid=&service_id=&service_point_id=&date=';

    const headers = {
        Cookie: 'session=1d45ce39-1b2e-4ff2-86d2-066909cd88d4',
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}