import http from 'k6/http';

export function createDiagnosis() {
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/create-diagnosis';

    const payload = {
        is_draft: "true",
        visit_id: "26c9f913-c777-4591-adae-91ff1d70e62b",
        diagnosis_id: "375b064c-79eb-11f1-9104-506b8da113d6",
        service_id: "3549cda2-fa1c-430f-9543-6646b87f394d",
        service_point_id: "6fdbd047-d926-4561-b9a2-801ad4d35f14",
        is_objective: "1",
        weight: "36",
        height: "180",
        waistline: "37",
        body_temperature: "36",
        pulse: "80",
        respiration: "70",
        pressure: "100/80",
        FBS: "10",
        BMI: "11.11",
        present_illness: "ทดสอบโหลดเทส",
        physical_examination: "ทดสอบโหลดเทส",
        icd_code: '["U5130","U5141"]',
        icd_code_secondary: '["U503"]',
        icd_code_comorbidity: '["U503","U505"]',
        icd_code_complication: '[]',
        icd_code_other: '[]',
        external_cause: "",
        ruling: "U51.30 โลหิตระดูร้าง, U51.41 โลหิตระดูแห้งไป",
        cause_of_symptoms: '["ความร้อน-ความเย็น","ความโกรธ"]',
        cause_of_symptoms_other: "",
        summary_of_sickness: "ทดสอบโหลดเทส",
        four_elements_diagnosis: "ทดสอบโหลดเทส",
        important_symptoms: "ทดสอบโหลดเทส",
        history_present_illness: "ทดสอบโหลดเทส",
        past_medical_history: "ทดสอบโหลดเทส",
        social_history: "ทดสอบโหลดเทส",
        family_history: "ทดสอบโหลดเทส",
        review_of_system: "ทดสอบโหลดเทส",
        duration: "ทดสอบโหลดเทส",
        pregnancy_status: "ไม่ตั้งครรภ์",
        is_treatment_plan: "0",
        treatment_plan: "",
        treatment_plan_detail: "",
        follow_up: "",
        next_appointment_date: "",
        appointment_reason: "",
        is_drug_allergy: "0",
        drug_allergies: "[]",
        is_procedure: "0",
        procedure: "[]",
        taking_procedure: "",
        taking_procedure_date: "",
        taking_procedure_location_code: "",
        is_medicine: "1",
        medicine: '[{"drugname":"ขมิ้นชัน","drugcode":"410000000100000020110662","amount":"2","unitsell":"035","to_use":"ทดสอบโหลดเทส","note":"ทดสอบโหลดเทส","date_serv":"2026-07-07"}]',
        taking_medicine: "รับยาเรียบร้อย",
        taking_medicine_date: "2026-07-07",
        taking_medicine_location_code: "00000",
        drug_transport_detail: "[]",
        delived_address: "{}",
    };

    const headers = {
        Cookie: 'session=a5f32e63-1c59-4740-908c-98a7fbc73d16',
    };

    const response = http.post(url, payload, {
        headers,
    });

    //console.log(`Response body: ${response.body}`);

    return response;
}