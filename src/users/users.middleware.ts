import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example middlware')
    console.log(req.headers.authorization);
    const { authorization } = req.headers

    if(!authorization) throw new HttpException('No Authroization Token', HttpStatus.FORBIDDEN )
    if(authorization === 'asaasasddsaf')
    next();
    else throw new HttpException('Invalid Authorization Token', HttpStatus.FORBIDDEN)
  }
}
