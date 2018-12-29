import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { Routes } from 'nest-router';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...excluded: Routes): MiddlewareFunction {
    return (req, _res, next) => {
      const isExcluded =
        excluded.filter(route => {
          console.log(LoggerMiddleware.name, ':', '{ Request Path ->', req.path, ' }');
          const excludePath = route.path === req.path;
          return excludePath;
        }).length > 0;
      console.log(LoggerMiddleware.name, ':', '{ Is Excluded ->', isExcluded, ' }');
      next();
    };
  }
}
