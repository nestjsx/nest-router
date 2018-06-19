# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.6] - 2018-06-20
### Changed
* Now Nest Router Module Using Nest V5+
> See examples folder, there is `nest-v5x`.

## [1.0.5] - 2018-02-27

### Deprecated

* `childrens`, use `children` instead.
  see [why](https://github.com/shekohex/nest-router/issues/6)?

## [1.0.4] - 2018-02-12

### Added

* You can now Omit the `module` keyword and just using an arry
  of `children` and one `path` proparty.

## [1.0.3] - 2018-02-10

### Added

* `children` array can be array with just modules.
  this means you can omit the `path` keyword.
* Unreleased section to gather unreleased changes and encourage note
  keeping prior to releases.

## [1.0.2] - 2018-02-08

### Added

* Routes now can be endless nested array.

## [1.0.1] - 2018-02-05

### Changed

* `children` now an Array insted of `object`

## [1.0.0] - 2018-02-05

* Published to NPM :rocket:
* add continuous integration "Travis CI"

## [0.0.0] - 2018-01-31

### Added

* Greenkeeper badge
* README
* Good examples and basic guidelines, in example folder and README.
* Build status badge
