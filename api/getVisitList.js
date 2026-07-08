import http from 'k6/http';
import { cookie } from './env.js';

export function getVisitList() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/get-visit-list?pid=&page=1&limit=10&status=%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%94&service_id=&service_point_id=&order_by=DESC&date=';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}