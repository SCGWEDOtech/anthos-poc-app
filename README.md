# anthos-poc-app

Context diagram

![Image of anthos poc app context diagram]
(https://www.dropbox.com/s/4ek3u0go50areq8/anthos-poc-fibonacci-sequence.png?dl=0)

## Quick Start

`backend1` serves a RESTful API, that acts as a proxy server. It forwards requests to `backend2` via gRPC protocol.

`backend2` serves both RESTful API and gRPC service. Instead of fowarding, it executes the requests.


```sh
git submodule init
git submodule update

docker-compose up
```
