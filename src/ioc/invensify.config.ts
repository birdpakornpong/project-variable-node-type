import { Container, interfaces } from "inversify";
import { ModelsProvider } from "src/api/models/models-provider";
import "../api/controllers";
import { TYPES } from "./type";
import * as dynamoose from "dynamoose";
import { ModelType } from "dynamoose/dist/General";
import { AnyDocument } from "dynamoose/dist/Document";
import { VariableDao } from "src/api/dao/dynamodb/variable-dao";
import { IVariableDao } from "src/api/dao/variable.dao";
import { VariableService } from "src/api/services/variable/dynamodb/dynamodb-variable";
import { IVariableService } from "src/api/services/variable/variable-service";
import { ITypeDao } from "src/api/dao/type.dao";
import { TypeDao } from "src/api/dao/dynamodb/type-dao";
import { ITypeService } from "src/api/services/type/type-service";
import { TypeService } from "src/api/services/type/dynamodb/dynamodb-type";
import { DynamoDB } from "aws-sdk";

const container = new Container();
// Table
container
  .bind<ModelsProvider>(TYPES.ModelsProvider)
  .toDynamicValue(() => ModelsProvider.getInstance())
  .inSingletonScope()
  .onActivation((context: interfaces.Context, injectable: ModelsProvider) => {
    // dynamoose.aws.ddb.local('http://localhost:8000');
    const dynamoDBClient = new DynamoDB({
      // region: "local",
      endpoint: "http://localhost:8000",
    });
    dynamoose.aws.ddb.set(dynamoDBClient);

    return injectable;
  });
// variable
container
  .bind<ModelType<AnyDocument>>(TYPES.VariableModel)
  .toDynamicValue((context: interfaces.Context) => {
    const modelsProvider: ModelsProvider = context.container.get(
      TYPES.ModelsProvider
    );

    return modelsProvider.getVariableModel();
  })
.inSingletonScope();
container.bind<IVariableDao>(TYPES.VariableDao).to(VariableDao);
container.bind<IVariableService>(TYPES.VariableService).to(VariableService);
// type
container
  .bind<ModelType<AnyDocument>>(TYPES.TypeModel)
  .toDynamicValue((context: interfaces.Context) => {
    const modelsProvider: ModelsProvider = context.container.get(
      TYPES.ModelsProvider
    );

    return modelsProvider.getTypeModel();
  })
.inSingletonScope();
container.bind<ITypeDao>(TYPES.TypeDao).to(TypeDao);
container.bind<ITypeService>(TYPES.TypeService).to(TypeService);

export default container;
