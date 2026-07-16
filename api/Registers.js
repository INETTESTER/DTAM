import http from 'k6/http';

// =========================
// Generate Thai Citizen ID
// =========================
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

export function Registers() {

    const cid = genCid();
    //console.log(cid);

    const url = 'https://uat-dtamnext.one.th/api/v1/person-app/register';

    const payload = JSON.stringify({
        cid: cid,
        title_id: "003",
        first_name: "กิตติพิชญ์",
        last_name: "จันทร์เปรม",
        sex: "1",
        birth: "2003-07-09",
        born_time: "4",
        blood_group: "A",
        nation_id: "099",
        mstatus: "2",
        email: "teetoon678@gmail.com",
        phone_number: "0000000000",
        approve_term: true,
        approve_data: true,
        house_number: "13/222",
        vill_no: "2",
        address_id: "715",
        czp_user: ""
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'session=5a8f489b-704a-4eb0-b50a-ba5b3b29ec7e; session_app=1462b22b-1b11-48fd-bc36-0d91545db4c1',
        },
    };

    const response = http.post(url, payload, params);

    // console.log(`CID      : ${cid}`);
    // console.log(`Status   : ${response.status}`);
    // console.log(`Response : ${response.body}`);


    return response;
}