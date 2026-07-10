import http from 'k6/http';
import { cookie } from './env.js';

export function get_diagnosis() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/get-diagnosis/000007a7-18be-43a5-b5ce-ca40f614a9a1';

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.get(url, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}