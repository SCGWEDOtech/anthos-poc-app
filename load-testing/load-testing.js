import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "2m", target: 100 }, // normal load
    { duration: "3m", target: 100 },
    { duration: "4m", target: 1000 }, // peak hour
    { duration: "5m", target: 1000 },
    { duration: "4m", target: 100 }, // scale down. Recovery stage.
    { duration: "3m", target: 100 },
    { duration: "2m", target: 0 },
  ],

  thresholds: {
    // the rate of successful checks should be higher than 90%
    checks: ["rate > 0.9"],
    http_req_duration: ["avg < 500", "p(90) < 1000"],
  },
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

let name = "fibonacci";
// let order = 37; // ~ 260 - 290ms per request (tested on localhost)
// let order = 36; // ~ 160 - 190ms per request (tested on localhost)
let order = 35; // ~ 100 - 120ms per request (tested on localhost)

export default function () {
  let res = http.get(`${BASE_URL}/calculator/fibo/${order}`, {
    tags: { name, order },
  });

  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
