import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function createVisit() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/create-visit';

    const payload = JSON.stringify({
        uid: "27",
        pid: "45",
        visit_date: "2026-07-16",
        visit_start_time: "18:30:00",
        visit_end_time: "19:00:00",
        service_type: "online",
        email: "test@gmail.com",
        phone: null,
        note: null,
        type_right: "SSS",
        type_right_text: "สิทธิประกันสังคม",
        is_self_pay: 0,
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