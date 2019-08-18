# ngx_http_auth_request_module_example
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## build
```
$ docker-compose build
$ docker-compose up -d
```

## usage 
### success
```
$ curl --user john:secret http://127.0.0.1
welcome!
```
### fail
- missing parameter
```
$ curl http://127.0.0.1
<html>
<head><title>401 Authorization Required</title></head>
<body>
<center><h1>401 Authorization Required</h1></center>
<hr><center>nginx/1.17.2</center>
</body>
</html>
```
- invalid parameter
```
$ curl --user name:password http://127.0.0.1
<html>
<head><title>401 Authorization Required</title></head>
<body>
<center><h1>401 Authorization Required</h1></center>
<hr><center>nginx/1.17.2</center>
</body>
</html>
```
