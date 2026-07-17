import http from 'k6/http';
import { cookie, cookie_app, timeout } from './env.js';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('pid', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/data.json')).pid; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function adjustPerson(scenario) {
    const pid = data[scenario.iterationInTest];
    const url = 'https://uat-dtamnext.one.th/api/v1/person/adjust-person';

    const headers = {
        Cookie: '' + cookie + '; ' + cookie_app,
        'Content-Type': 'application/json',
    };

    const payload = JSON.stringify({
        "pid": pid,
        "title_id": "003",
        "first_name": "สมหญิง",
        "last_name": "ใจดีจัง",
        "sex": "1",
        "birth": "2000-11-17",
        "nation_id": null,
        "house_number": "1",
        "address_detail": "ใต้ถุน",
        "blood_group": null,
        "address_id": "37",
        "vill_no": "0",
        "mobile": null,
        "mobile_contact": null,
        "mstatus": "9",
        "born_time": "6",
        "zip_code": "10330"
    });

    const response = http.put(url, payload, {
        headers,
        timeout: timeout,
    });

    return response;
}