import "reflect-metadata"; // สำคัญมาก in บรรทัด 1
import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import container from "./ioc/invensify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import { Warrior } from "./api/services/game/game-service";
import { TYPES } from "./ioc/type";
import {
  Monsters,
  PvPMode,
  Warriors,
} from "./api/services/game-new/game-new-service";

const server = new InversifyExpressServer(container);
const port = 3000;
const swaggerDocument = YAML.load("./swagger.yaml");

const ninja = container.get<Warrior>(TYPES.Warrior);
// console.log('ninja', ninja.fight())
const warriorC = container.get<Warriors>(TYPES.Warriors);
// console.log('warriorC', warriorC.getDetailPVP())
const monster = container.get<Monsters>(TYPES.Monsters);
// monster.getDetailPVP()

const pvp = container.get<PvPMode>(TYPES.PVPMode);
console.log(" pvp", pvp.pvpMode());

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
