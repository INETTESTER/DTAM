import http from 'k6/http';
import { cookie, timeout } from './env.js';

export function hoscode() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dashboard/dropdown/hoscode?health_area=%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%97%E0%B8%B5%E0%B9%88%201&province_code=57&district_code=5709&subdistrict_code=570906';

    const headers = {
        Cookie: '' + cookie,
        'Content-Type': 'application/json',
    };

    const response = http.get(url, {
        headers,
        timeout: timeout,
    });

    //console.log(response.body);
    return response;
}