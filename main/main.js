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




//============================================================================

export default function () {    //เรียกใช้ API ใน export default function

  //response = session()
  //response = address()
  //response = check_()
  //response = getVisitList()
  //response = countTab()
  //response = serviceHospital()
  //response = servicePoint()
  //response = personList()
  //response = doctor()
  //response = calendar()
  //esponse = slot()
  //response = createVisit()
  //response = schedule()
  //response = scheduleList()
  //response = timeslotsByDate()
  //response = drugTh()
  //response = createDiagnosis()


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