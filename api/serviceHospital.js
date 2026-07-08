import http from 'k6/http';

export function serviceHospital() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/dropdown/service-hospital?mode=booking';

    const headers = {
        Cookie: 'session=a5f32e63-1c59-4740-908c-98a7fbc73d16',
    };

    const response = http.get(url, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}