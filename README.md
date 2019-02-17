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

(async () => {
  // Resolved values
  {
    const task = arg => Promise.resolve(arg);
    const destructured = destructure(task);
    const [, response] = await destructured('Hello world'); // 'Hello world'
  }
  // Resolved values
  {
    const task = () => Promise.reject({ message: 'Some error' });
    const destructured = destructure(task);
    const [error] = await destructured(); // { message: 'Some error' }
  }
})();
```

## License

MIT
