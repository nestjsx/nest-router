# Nest Router :vertical_traffic_light:

[![Greenkeeper badge](https://badges.greenkeeper.io/shekohex/nest-router.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/shekohex/nest-router.svg?branch=master)](https://travis-ci.org/shekohex/nest-router)

Router Module For [Nestjs](https://github.com/nestjs/nest) Framework

## Quick Overview

`RouterModule` Will Help you to organize your Routes and it Will give you the ability to create a routes tree.

### How ?

Every Module could have a path property that path will be a prefix for all Controllers in this Module, then if that Module have a parent, it will be a child of it and again all Controllers in this child modules will be prefixed by `parent module prefix` + `this module prefix`

> see issue [#255](https://github.com/nestjs/nest/issues/255) .

## Install

Waiting for My [PR](https://github.com/nestjs/nest/pull/389) in Nestjs to be upproved, after that I will publish it in npm

## Setup

See How it easy to setup.

```ts
...//imports
const routes: Routes = [
  {
    path: '/ninja',
    module: NinjaModule,
    children: {
      path: '/cats',
      module: CatsModule,
    },
  },
  {
    path: '/ninja',
    module: NinjaModule,
    children: {
      path: '/dogs',
      module: DogsModule,
    },
  },
];

@Module({
  imports: [
      RouterModule.forRoutes(routes), // setup the routes
      CatsModule,
      DogsModule,
      NinjaModule
      ], // as usual, nothing new
})
export class ApplicationModule { }
```

> :+1: TIP: Keep all of your Routes in a sprate file like `routes.ts`

in this example the all the controllers in `NinjaModule` will be prefixed by `/ninja` then
it have a 2 childs `CatsModule` and `DogsModule`.

again, all controllers `CatsModule` will be prefixed by `/cats` Right ?, NO!! :open_mouth:
, the `CatsModule` is a child of `NinjaModule` so it will be prefixed by `/ninja/cats/` path insted.
and so `DogsModule`.

> See example folder for more information.

#### Example Folder Project Structure

```bash
.
├── app.module.ts
├── cats
│   ├── cats.controller.ts
│   ├── cats.module.ts
│   └── ketty.controller.ts
├── dogs
│   ├── dogs.controller.ts
│   ├── dogs.module.ts
│   └── puppy.controller.ts
├── main.ts
└── ninja
    ├── katana.controller.ts
    ├── ninja.controller.ts
    └── ninja.module.ts
```

and here is a simple nice route tree of `example` folder

```bash
ninja
    ├── /
    ├── /katana
    ├── cats
    │   ├── /
    │   └── /ketty
    ├── dogs
        ├── /
        └── /puppy
```

Nice !

## Todo

* [x] Write Tests
* [x] Linting
* [ ] Make `children` as an Array insted of Object
  ## Contributing

you are welcome with this project for contributing, just make a PR

## Authors

* **Shady Khalifa** - _Initial work_

See also the list of [contributors](https://github.com/shekohex/nest-router/contributors) who participated in this project.

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details
