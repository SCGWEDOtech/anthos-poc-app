# anthos-poc-app

Context diagram:
https://drive.google.com/file/d/1WLtNZfm7gv_sE0wI_6yiAFib5Wuiygyv/view

## Quick Start

`backend1` serves a RESTful API, that acts as a proxy server. It forwards requests to `backend2` via gRPC protocol.

`backend2` serves both RESTful API and gRPC service. Instead of fowarding, it executes the requests.


```sh
git submodule init
git submodule update

docker-compose up
```
