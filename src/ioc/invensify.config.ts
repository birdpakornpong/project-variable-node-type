import { Container, interfaces } from "inversify";
import { ModelsProvider } from "src/api/models/models-provider";
import {
  WarriorC,
  WeaponWarriorC,
} from "src/api/services/game-new/dao/game-new-dao";
import { MonsterPvP } from "src/api/services/game-new/dao/monster";
import { PlayerPVP } from "src/api/services/game-new/dao/pvp";
import {
  Monsters,
  PvPMode,
  Warriors,
  WeaponWarriors,
} from "src/api/services/game-new/game-new-service";
import { Katana, Ninja, Shuriken } from "src/api/services/game/dao/game-dao";
import {
  ThrowableWeapon,
  Warrior,
  Weapon,
} from "src/api/services/game/game-service";
import { HomeService } from "src/api/services/home-service/home-service";
import { Home } from "src/api/services/home-service/manage/home-manage";
import { StudentRoomManage } from "src/api/services/student-room/manage/student-room-manage";
import { StudentRoomService } from "src/api/services/student-room/student-room-service";
import "../api/controllers";
import * as dynamoose from "dynamoose";
import { TYPES } from "./type";
import { DynamoDB } from "aws-sdk";
import { ModelType } from "dynamoose/dist/General";
import { AnyDocument } from "dynamoose/dist/Document";
import { ProductService } from "src/api/services/products/product-service";
import { DynamoDbProductService } from "src/api/services/products/dynamodb/dynamodb-products";
import { IProductsDao } from "src/api/dao/products.dao";
import { ProductsDao } from "src/api/dao/dynamodb/products-dao";

const container = new Container();

// Table
container
  .bind<ModelsProvider>(TYPES.ModelsProvider)
  .toDynamicValue(() => ModelsProvider.getInstance())
  .inSingletonScope()
  .onActivation((context: interfaces.Context, injectable: ModelsProvider) => {
    console.log("1");
    // dynamoose.aws.ddb.local('http://localhost:8000');
    const dynamoDBClient = new DynamoDB({
      region: "local",
      endpoint: "http://localhost:8000",
    });
    dynamoose.aws.ddb.set(dynamoDBClient);

    return injectable;
  });

container
  .bind<ModelType<AnyDocument>>(TYPES.ProductsModel)
  .toDynamicValue((context: interfaces.Context) => {
    const modelsProvider: ModelsProvider = context.container.get(
      TYPES.ModelsProvider
    );

    return modelsProvider.getProductsModel();
  })
  .inSingletonScope();

container.bind<IProductsDao>(TYPES.ProductDao).to(ProductsDao);
container.bind<ProductService>(TYPES.ProductService).to(DynamoDbProductService);

container.bind<HomeService>("HomeService").to(Home);
container.bind<StudentRoomService>("StudentRoomService").to(StudentRoomManage);
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
container.bind<Warriors>(TYPES.Warriors).to(WarriorC);
container.bind<WeaponWarriors>(TYPES.WeaponWarriors).to(WeaponWarriorC);
container.bind<Monsters>(TYPES.Monsters).to(MonsterPvP);
container.bind<PvPMode>(TYPES.PVPMode).to(PlayerPVP);

export default container;
