import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function schedule() {
    const url = 'https://uat-dtamnext.one.th/api/v1/slot/config/schedule';

    const payload = JSON.stringify({
        uids: [
            31,
        ],
        service_id: "3549cda2-fa1c-430f-9543-6646b87f394d",
        service_point_id: "6fdbd047-d926-4561-b9a2-801ad4d35f14",
        start_date: "2026-07-10",
        start_time: "09:00",
        end_time: "12:00",
        slot_duration: 30,
    });

    const headers = {
        Cookie: '' + cookie,
        'Content-Type': 'application/json',
    };

    const response = http.post(url, payload, {
        headers,
        timeout: timeout,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}