# destructure-promise

[![Travis branch](https://img.shields.io/travis/JordanSinko/destructure-promise/master.svg)](https://travis-ci.org/JordanSinko/destructure-promise)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=com.jordansinko.destructure-promise&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.jordansinko.destructure-promise)
[![Sonarcloud Coverage](https://img.shields.io/sonar/https/sonarcloud.io/com.jordansinko.destructure-promise/coverage.svg)](https://sonarcloud.io/dashboard?id=com.jordansinko.destructure-promise)
[![NPM Downloads](https://img.shields.io/npm/dm/destructure-promise.svg)](https://www.npmjs.com/package/destructure-promise)
[![NPM License](https://img.shields.io/npm/l/destructure-promise.svg)](https://www.npmjs.com/package/destructure-promise)

Make a promise-based function return a destructurifiable object.

Uses the native promise implementation.

## Installation

```bash
npm install destructure-promise
```

## API

### `destructure-promise(fn)`

Takes a promise-based function and returns the destructuried function. The idea for this was from Go's-like version of a tuple response.

```js
const destructure = require('destructure-promise');
const resolveFn = arg => new Promise(res => setTimeout(res, 0, arg));
const fn = destructure(resolveFn);

// Works with Promise resolutions:
fn('Hello World!').then(({ response }) => console.log(response)); // -> Hello World!

const rejectFn = () => new Promise((_, rej) => setTimeout(rej, 0, new Error('This is an error!')));
const fn = destructure(rejectFn);

// Works with Promise rejections:
fn('Hello World!').then(({ error }) => console.log(error.message)); // -> This is an error!

// Works with async/await:
const resolveFn = arg => new Promise(res => setTimeout(res, 0, arg));
const fn = destructure(resolveFn);

(async () => {
  const { error, response } = await fn('Hello World!');
  if (error != null) throw error;
  console.log(response); // -> Hello World!
})();
```

## License

MIT
