import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function timeslotsByDate() {
    const url = 'https://uat-dtamnext.one.th/api/v1/slot/timeslots-by-date?date=2026-07-16&service_id=&service_point_id=&uid=';

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