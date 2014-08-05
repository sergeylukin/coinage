## CoinAge

Engine for [CoinAge micro board game][coinage board game] written in
[JavaScript programming language][javascript]. It uses some of syntax proposed
in [ES6][] specification.

## Install

With [npm][] do:

```
npm install coinage
```

## Unit Testing

This project uses [jasmine-node][] as it's unit testing framework.

To run tests yourself, follow these steps:

- Clone the project to your local box

  ```
  git clone https://github.com/sergeylukin/coinage.git
  cd coinage
  ```

- Install all the dependencies

  ```
  npm install
  ```

- Run the tests

  ```
  npm test
  ```

## TODO:

[Coinage][] is a work in progress, so any ideas and patches are
appreciated.

* implement core functionality with 100% coverage
* write documentation in [reStructuredText][] format, build it using
[Sphinx][]
and host it on [ReadTheDocs][]
* add JSDoc notations

## Contributing

See [contributing guide][contributing]

## Changelog

See the [changelog][]

## License

Released under [MIT license][]

[coinage]: http://github.com/sergeyluykin/coinage
[npm]: http://npmjs.org
[mit license]: http://sergey.mit-license.org/
[es6]: http://wiki.ecmascript.org/doku.php?id=harmony:harmony
[javascript]: https://developer.mozilla.org/en/docs/Web/JavaScript
[changelog]:
http://github.com/sergeylukin/coinage/blob/master/CHANGELOG.md
[contributing]:
http://github.com/sergeylukin/coinage/blob/master/CONTRIBUTING.md
[coinage board game]:
https://www.kickstarter.com/projects/michaelmindes/coin-age-a-pay-what-you-want-area-control-microgam
[jasmine-node]: https://github.com/mhevery/jasmine-node
[restructuredtext]: http://sphinx-doc.org/rest.html
[sphinx]: http://sphinx-doc.org/
[readthedocs]: https://readthedocs.org/
