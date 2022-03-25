import { Request, Response, NextFunction } from "express";
import * as ei from "express-interceptor";

export class RequestLogMiddleware {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    console.log("req", request.body);
    next();
  }

  public static responseInterceptor() {
    return ei.default((request: Request, response: Response) => ({
      isInterceptable: () => true,
      intercept: (body: any, send: any) => {
        send(body);
      },
    }));
  }
}
