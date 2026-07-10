import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function doctor() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/dropdown/doctor?service_id=2561c6f2-d2af-4953-a48a-8a7e81edc9fd&service_point_id=6fdbd047-d926-4561-b9a2-801ad4d35f14&mode=booking';

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