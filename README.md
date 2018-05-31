# parse-adapters
parse-adapters adapters

[![NPM Version](https://img.shields.io/npm/v/@wang-dong/parse-adapters.svg)](https://www.npmjs.com/package/@wang-dong/parse-adapters)
[![NPM Downloads](https://img.shields.io/npm/dt/@wang-dong/parse-adapters.svg)](https://www.npmjs.com/package/@wang-dong/parse-adapters)
[![NPM License](https://img.shields.io/npm/l/@wang-dong/parse-adapters.svg)](https://www.npmjs.com/package/@wang-dong/parse-adapters)

## example

```
"cacheAdapter": {
  "module": "parse-server/lib/Adapters/Cache/RedisCacheAdapter.js",
  "options": {
    "url": "redis://redis:6379/0"
  }
},
"liveQuery": {
  "redisURL": "redis://redis:6379/1",
  "classNames": [
    "Socket"
  ]
},
"emailAdapter": {
  "module": "@wang-dong/parse-adapters/email/smtp.js",
  "options": {
    "host": "smtp.xxxx.com",
    "port": 25,
    "secure": false,
    "from": {
      "name": "通知",
      "address": "xxxx@parse.server"
    },
    "auth": {
      "user": "xxxx@parse.server",
      "pass": "xxxxxx"
    },
    "logger": true,
    "debug": true
  }
},
"analyticsAdapter": {
  "module": "@wang-dong/parse-adapters/analytics/database.js"
},
 "filesAdapter": {
  "module": "@wang-dong/parse-adapters/files/filesystem.js"
},
"maxUploadSize": "30mb"

```
