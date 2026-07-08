import http from 'k6/http';

export function scheduleList() {
    const url = 'https://uat-dtamnext.one.th/api/v1/slot/schedule-list?date=2026-07-10&service_id=&service_point_id=&uid=&start_time=&end_time=&page=1&limit=20';

    const headers = {
        Cookie: 'session=a5f32e63-1c59-4740-908c-98a7fbc73d16',
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}