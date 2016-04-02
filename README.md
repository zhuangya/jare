#jare

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

add url prefix for [jare.io](http://www.jare.io/)


## Validation

validation is on by default, if you don't want jare to validate url, invoke jare like so:

```javascript

jare('http://some.url/default.png', {
  prefix: 'http://some.other.prefix/',
  check: false
});
```

## related projects

- [express middleware][express-jare-url];

##TODO

- [x] validation
- [ ] [express][express-jare-url] / koa middleware
- [x] better tests
- [ ] browser support


[express-jare-url]:https://npmjs.org/package/express-jare

[npm-image]: https://img.shields.io/npm/v/jare.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jare
[travis-image]: https://img.shields.io/travis/zhuangya/jare.svg?style=flat-square
[travis-url]: https://travis-ci.org/zhuangya/jare
[david-image]: http://img.shields.io/david/zhuangya/jare.svg?style=flat-square
[david-url]: https://david-dm.org/zhuangya/jare
[license-image]: http://img.shields.io/npm/l/jare.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/jare.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/jare
