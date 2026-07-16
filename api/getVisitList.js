import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function getVisitList() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/get-visit-list?pid=&page=1&limit=10&status=%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%94&service_id=&service_point_id=&order_by=DESC&date=';

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