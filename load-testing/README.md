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

Or run the tests via cloud: <https://k6.io/docs/getting-started/running-k6#running-cloud-test>

