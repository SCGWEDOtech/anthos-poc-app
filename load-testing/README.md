# load-testing

## Prerequisite

Install k6 cli: <https://k6.io/docs/getting-started/installation>

## Getting Started

There are 4 load tests:

- `load-testing.js`
- `stress-testing.js`
- `spike-testing.js`
- `soak-testing.js`

To run a test locally:

```sh
# run load-testing.js locally
$ k6 run -e BASE_URL="http://localhost:3000" \
    --out json=load-testing.json \
    --summary-export=load-testing-sum.json \
    load-testing.js
```

> Caution: a test runs at least 10 mins. Importantly, `soak-testing.js` takes around 3 hours.

Or run the tests via cloud: <https://k6.io/docs/getting-started/running-k6#running-cloud-test>

### load-testing

| Action                      | Duration |
| --------------------------- | -------- |
| Scale up from 0 to 100      | 2 min    |
| Stay at 100                 | 3 min    |
| Scale up from 100 to 1000   | 4 min    |
| Stay at 1000                | 5 min    |
| Scale down from 1000 to 100 | 4 min    |
| Stay at 100                 | 3 min    |
| Scale down from 100 to 0    | 4 min    |

### stress-testing

| Action                      | Duration |
| --------------------------- | -------- |
| Scale up from 0 to 100      | 2 min    |
| Stay at 100                 | 5 min    |
| Scale up from 100 to 1000   | min      |
| Stay at 1000                | 5 min    |
| Scale up from 1000 to 5000  | 2 min    |
| Stay at 5000                | 5 min    |
| Scale up from 5000 to 10000 | 2 min    |
| Stay at 10000               | 5 min    |
| Scale down from 10000 to 0  | 3 min    |

### spike-testing

| Action                      | Duration |
| --------------------------- | -------- |
| Scale up from 0 to 100      | 10 sec   |
| Stay at 100                 | 1 min    |
| Scale up from 100 to 5000   | 10 sec   |
| Stay at 5000                | 3 min    |
| Scale down from 5000 to 100 | 10 sec   |
| Stay at 100                 | 3 min    |
| Scale down from 100 to 0    | 10 sec   |

### soak-testing

| Action                   | Duration |
| ------------------------ | -------- |
| Scale up from 0 to 500   | 2 min    |
| Stay at 100              | 3 hour   |
| Scale down from 500 to 0 | 2 min    |
