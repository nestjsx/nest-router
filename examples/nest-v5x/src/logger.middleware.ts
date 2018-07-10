import { Injectable, NestMiddleware, FunctionMiddleware } from '@nestjs/common';
import { Route, Routes } from 'nest-router';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...excluded: Route[]): FunctionMiddleware {
    return (req, res, next) => {
      const isExcluded =
        excluded.filter(route => {
          console.log(
            LoggerMiddleware.name,
            ':',
            '{ Request Path ->',
            req.path,
            ' }',
          );
          let excludePath = route.path == req.path;
          return excludePath;
        }).length > 0;
      console.log(
        LoggerMiddleware.name,
        ':',
        '{ Is Excluded ->',
        isExcluded,
        ' }',
      );
      next();
    };
  }
}
