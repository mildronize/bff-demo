import { Injectable, Inject, INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TRPCService {
  constructor(
    // DI provided by NestJS
    // @Inject(UserRepo) private readonly userRepo: UserRepo
  ) {
    console.log('hey TRPC');
  }

  // Singleton scope is used for injection by default so `t` is created only once
  t = initTRPC.create()

  appRouter = this.t.router({
    users: this.t.procedure.query(async (opts) => {
      // Here we can use providers injected by NestJS in our procedures
      // throw new Error('hey');
      return [ {name: 'thada'}];
    })
  })

  applyMiddleware(app: INestApplication) {
    app.use(
      "/trpc",
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      })
    )
  }
}
