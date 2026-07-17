import http from 'k6/http';
import { cookie, timeout } from './env.js';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('pid2', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/data2.json')).pid; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});


export function createDiagnosis(scenario) {
    const pid = data[scenario.iterationInTest];
    const url = 'https://uat-dtamnext.one.th/api/v1/visits/create-diagnosis';

    const payload = {
        is_draft: 'true',
        visit_id: pid,
        diagnosis_id: '',
        service_id: '2561c6f2-d2af-4953-a48a-8a7e81edc9fd',
        service_point_id: '6fdbd047-d926-4561-b9a2-801ad4d35f14',
        is_objective: '1',
        weight: '',
        height: '123',
        waistline: '',
        body_temperature: '',
        pulse: '',
        respiration: '',
        pressure: '',
        FBS: '',
        BMI: '',
        present_illness: 'fsaf',
        physical_examination: '',
        icd_code: '[]',
        icd_code_secondary: '[]',
        icd_code_comorbidity: '[]',
        icd_code_complication: '[]',
        icd_code_other: '[]',
        external_cause: '',
        ruling: '',
        cause_of_symptoms: '[]',
        cause_of_symptoms_other: '',
        summary_of_sickness: '12',
        four_elements_diagnosis: 'dafa',
        important_symptoms: 'เทสเทส',
        history_present_illness: 'd',
        past_medical_history: '',
        social_history: 'fsdf',
        family_history: 'fs',
        review_of_system: 'fsd',
        duration: '',
        pregnancy_status: '',
        is_treatment_plan: '0',
        treatment_plan: '',
        treatment_plan_detail: '',
        follow_up: '',
        next_appointment_date: '',
        appointment_reason: '',
        is_drug_allergy: '0',
        drug_allergies: '[]',
        is_procedure: '0',
        procedure: '[]',
        taking_procedure: '',
        taking_procedure_date: '',
        taking_procedure_location_code: '',
        is_medicine: '0',
        medicine: '[]',
        taking_medicine: '',
        taking_medicine_date: '',
        taking_medicine_location_code: '',
        drug_transport_detail: '[]',
        delived_address: '{}',
    };

    const params = {
        headers: {
            Cookie: '' + cookie,
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}