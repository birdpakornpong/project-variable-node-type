import "reflect-metadata"; // สำคัญมาก in บรรทัด 1
import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import container from "./ioc/invensify.config";
import { InversifyExpressServer } from "inversify-express-utils";

const server = new InversifyExpressServer(container);
const port = 3000;
const swaggerDocument = YAML.load("./swagger.yaml");

server
  .setConfig((app: express.Application): void => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(express.json());
    // app.use(RequestLogMiddleware.handle, RequestLogMiddleware.responseInterceptor());
  })
  .build()
  .listen(port, () => {
    console.log(`The service has been up and running on ${port} port`);
  });
