import http from 'k6/http';

export function createVisit() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/create-visit';

    const payload = JSON.stringify({
        uid: "31",
        pid: "35",
        visit_date: "2026-07-10",
        visit_start_time: "09:30:00",
        visit_end_time: "10:00:00",
        service_type: "online",
        email: "test@gmail.com",
        phone: null,
        note: null,
        type_right: "SSS",
        type_right_text: "สิทธิประกันสังคม",
        is_self_pay: 0,
    });

    const headers = {
        Cookie: 'session=a5f32e63-1c59-4740-908c-98a7fbc73d16',
        'Content-Type': 'application/json',
    };

    const response = http.post(url, payload, {
        headers,
    });

    console.log(`Response body: ${response.body}`);

    return response;
}