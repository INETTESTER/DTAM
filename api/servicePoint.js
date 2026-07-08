import http from 'k6/http';
import { cookie } from './env.js';

export function servicePoint() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/dropdown/service-point?service_id=2561c6f2-d2af-4953-a48a-8a7e81edc9fd&mode=booking';

    const headers = {
        Cookie: '' + cookie,
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}