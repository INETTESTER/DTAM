import http from 'k6/http';

export function drugTh() {
    const url = 'https://uat-dtamnext.one.th/api/v1/dropdown/drug-th?search=&limit=20&search_arr=';

    const headers = {
        Cookie: 'session=ce06e79d-0949-4269-9789-14ab0dd9d185',
    };

    const response = http.get(url, {
        headers,
    });

    console.log(`Response body: ${response.body}`);

    return response;
}