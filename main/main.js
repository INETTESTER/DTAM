//=============================== import API =================================
import { check, sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { session } from '../api/session.js';
import { address } from '../api/address.js';
import { check_ } from '../api/check.js';
import { getVisitList } from '../api/getVisitList.js';
import { countTab } from '../api/countTab.js';
import { serviceHospital } from '../api/serviceHospital.js';
import { servicePoint } from '../api/servicePoint.js';
import { personList } from '../api/personList.js';
import { doctor } from '../api/doctor.js';
import { calendar } from '../api/calendar.js';
import { slot } from '../api/slot.js';
import { createVisit } from '../api/createVisit.js';
import { schedule } from '../api/schedule.js';
import { scheduleList } from '../api/scheduleList.js';
import { timeslotsByDate } from '../api/timeslotsByDate.js';
import { drugTh } from '../api/drugTh.js';
import { createDiagnosis } from '../api/createDiagnosis.js';
import { dropdown_user } from '../api/dropdown_user.js';
import { hospital_config } from '../api/hospital_config.js';
import { procedure_th } from '../api/procedure_th.js';
import { drug_unit } from '../api/drug_unit.js';
import { icd } from '../api/icd.js';
import { hospital_list } from '../api/hospital_list.js';
import { get_diagnosis } from '../api/get_diagnosis.js';
import { detail } from '../api/detail.js';
import { history } from '../api/history.js';
import { title } from '../api/title.js';
import { bornTime } from '../api/bornTime.js';
import { nationality } from '../api/nationality.js';
import { mstatus } from '../api/mstatus.js';
import { Profile } from '../api/Profile.js';
import { home } from '../api/home.js';
import { rights } from '../api/rights.js';
import { hospitalList } from '../api/hospitalList.js';
import { booked } from '../api/booked.js';
import { screening } from '../api/screening.js';
import { conferenceScreening } from '../api/conferenceScreening.js';
import { province } from '../api/province.js';
import { district } from '../api/district.js';
import { subdistrict } from '../api/subdistrict.js';
import { hoscode } from '../api/hoscode.js';
import { adjustPerson } from '../api/adjustPerson.js';
import { history_ } from '../api/history_.js';
import { list } from '../api/list.js';
import { notification } from '../api/notification.js';
import { Registers } from '../api/Registers.js';





//============================================================================

export default function () {    //เรียกใช้ API ใน export default function

  //response = session()              // 1
  //response = address()              // 2
  //response = check_()               // 3
  //response = getVisitList()         // 4
  //response = countTab()             // 5
  //response = serviceHospital()      // 6
  //response = servicePoint()         // 7
  //response = personList()           // 8
  //response = doctor()               // 9
  //response = calendar()             // 10
  //response = slot()                 // 11
  //response = createVisit()          // 12
  //response = schedule()              // 13
  //response = scheduleList()          // 14
  //response = timeslotsByDate()       // 15
  //response = drugTh()                // 16
  //response = createDiagnosis()       // 17

  //----------------- เพิ่มมาใหม่ ----------------------------
  //response = dropdown_user()         // 18
  //response = hospital_config()       // 19
  //response = procedure_th()          // 20
  //response = drug_unit()             // 21
  //response = icd()                   // 22
  //response = hospital_list()         // 23
  //response = get_diagnosis()         // 24
  //response = detail()                // 25
  //response = history()               // 26

  //----------------- เพิ่มมาใหม่ ----------------------------
  //response = title()                 // 27
  //response = bornTime()              // 28
  //response = nationality()            // 29
  //response = mstatus()                // 30
  //response = Profile()                // 31
  //response = home()                   // 32
  //response = rights()                 // 33
  //response = hospitalList()           // 34
  //response = booked()                 // 35
  //response = screening()              // 36
  //response = conferenceScreening()    // 37
  //response = province()               // 38
  //response = district()               // 39
  //response = subdistrict()            // 40
  //response = hoscode()                // 41
  //response = adjustPerson()           // 42
  //response = history_()               // 43
  //response = list()                   // 44
  //response = notification()           // 45
  response = Registers()



  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };