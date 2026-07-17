import http from 'k6/http';
import { cookie } from './env.js';

const RUN_ID = Date.now().toString().slice(-5);

function genCid() {
    let base =
        '1' +
        RUN_ID +
        String(__VU).padStart(3, '0') +
        String(__ITER).padStart(3, '0');

    // ให้เหลือ 12 หลัก
    base = base.padEnd(12, '0').slice(0, 12);

    const digits = base.split('').map(Number);

    const sum = digits.reduce((acc, d, i) => acc + d * (13 - i), 0);
    const checkDigit = (11 - (sum % 11)) % 10;

    return base + checkDigit;
}

export function person() {
    const cid = genCid();
    const url = 'https://uat-dtamnext.one.th/api/v1/person';

    const payload = JSON.stringify({
        cid: cid,
        title_id: '003',
        first_name: 'สมชาย',
        last_name: 'ใจดี',
        sex: '1',
        birth: '2000-01-01',
        nation_id: null,
        house_number: '11',
        address_detail: null,
        blood_group: null,
        address_id: '304',
        vill_no: '0',
        mobile: null,
        mobile_contact: null,
        mstatus: null,
        born_time: '2',
        zip_code: '12170',
        category_group_id: [],
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': '' + cookie,
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}