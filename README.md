# anthos-poc-app

Context diagram:

![Image of anthos poc app context diagram](https://previews.dropbox.com/p/thumb/AA294labQR6uQLzxUq_lwjyY01WaQqwAogyRkLKxfB_C-v_BUYVrVDVu0cjqisVzhi95emGBkZZ4cKztE8D1thsVBW8nL5lZfZUC54ko-JbNtehbBqCE6yk8j6JR6Zn8XXKATDQs5Yer2gKNMdjWBEOYp2-HsxwZVz3H3OZ9RLaEmSKpxLkSFBDQyT6pBTpHgXgUzFpZDrsICVjm9nZ6B-F-_5GyzxqsSo95TmJu3brdZhpM2xYoO2xKMWjhPMsL-fDp_ZFs6b2bYQp2etG_betNhtPfIbUEmwg_R3RvTM4jA6UYgic5XKMJYJFfRJggX2HRaNxHmhZ1HmsF-gb88-gGhxmjiF0q-STUEkxEOzVCgA/p.png?fv_content=true&size_mode=5)

## Quick Start

`backend1` serves a RESTful API, that acts as a proxy server. It forwards requests to `backend2` via gRPC protocol.

`backend2` serves both RESTful API and gRPC service. Instead of fowarding, it executes the requests.


```sh
git submodule init
git submodule update

docker-compose up
```
