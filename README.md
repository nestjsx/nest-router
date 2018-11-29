# Nest Router :vertical_traffic_light:

[![Greenkeeper badge](https://badges.greenkeeper.io/shekohex/nest-router.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/shekohex/nest-router.svg?branch=master)](https://travis-ci.org/shekohex/nest-router) [![npm version](https://badge.fury.io/js/nest-router.svg)](Https://www.npmjs.com/package/nest-router) [![Coverage Status](https://coveralls.io/repos/github/shekohex/nest-router/badge.svg?branch=master)](https://coveralls.io/github/shekohex/nest-router?branch=master)

Router Module For [Nestjs](https://github.com/nestjs/nest) Framework

## Quick Overview

`RouterModule` helps you organize your routes and lets you create a routes tree.

### How ?

Every module could have a path property. That path will be a prefix for all controllers in this module. If that module has a parent, it will be a child of it and again all controllers in this child module will be prefixed by `parent module prefix` + `this module prefix`

> see issue [#255](https://github.com/nestjs/nest/issues/255) .

## Install

IMPORTANT: you need Nest > v4.5.10+

```bash
npm install nest-router --save
```

OR

```bash
yarn add nest-router
```

## Setup

See how easy it is to set up.

```ts
... //imports
const routes: Routes = [
    {
      path: '/ninja',
      module: NinjaModule,
      children: [
        {
          path: '/cats',
          module: CatsModule,
        },
        {
          path: '/dogs',
          module: DogsModule,
        },
      ],
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
export class ApplicationModule {}
```

> :+1: TIP: Keep all of your routes in a separate file like `routes.ts`

In this example, all the controllers in `NinjaModule` will be prefixed by `/ninja` and it
has two childs, `CatsModule` and `DogsModule`.

Will the controllers of `CatsModule` be prefixed by `/cats`? NO!! :open_mouth:
The `CatsModule` is a child of `NinjaModule` so it will be prefixed by `/ninja/cats/` instead.
And so will `DogsModule`.

> See examples folder for more information.

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

And here is a simple, nice route tree of `example` folder:

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

Nice!

#### Resolve Full Controller Path:
Nestjs dosen't resolve or take into account `MODULE_PATH` metadata when it is coming to resolve Controller path in Middlewear resolver for example, so that i introduced a new fancy method `RouterModule#resolvePath` that will resolve the full path of any controller so instead of doing so:

```ts
consumer.apply(someMiddleware).forRoutes(SomeController);
``` 
you should do

```ts
consumer.apply(someMiddleware).forRoutes(RouterModule.resolvePath(SomeController));
``` 

see [#32](https://github.com/shekohex/nest-router/pull/32) for more information about this.

## CHANGELOG

See [CHANGELOG](CHANGELOG.md) for more information.

## Contributing

You are welcome to contribute to this project, just open a PR.

## Authors

* **Shady Khalifa** - _Initial work_

See also the list of [contributors](https://github.com/shekohex/nest-router/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
