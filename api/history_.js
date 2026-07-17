import http from 'k6/http';
import { cookie_app, timeout } from './env.js';

export function history_() {
    const url = 'https://uat-dtamnext.one.th/api/v1/patient/history?sort=DESC&page=1&limit=10';

    const headers = {
        Cookie: 'session_app=be827d85-8e04-45d6-b29d-7cea74af08f9',
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(response.body);
    return response;
}