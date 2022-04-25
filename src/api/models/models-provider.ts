import { ModelType } from "dynamoose/dist/General";
import { Document } from "dynamoose/dist/Document";
import * as dynamoose from "dynamoose";
import { VariableSchema } from "./schemas/variable-schema";
import { TypeSchema } from "./schemas/type-schema";

export class ModelsProvider {
  private static instance: ModelsProvider;

  private variablesModel!: ModelType<Document>;
  private typeModel!: ModelType<Document>;

  public static getInstance(): ModelsProvider {
    if (!ModelsProvider.instance) {
      ModelsProvider.instance = new ModelsProvider();
    }

    return ModelsProvider.instance;
  }

  public getVariableModel(): ModelType<Document> {
    if (!this.variablesModel) {
      this.variablesModel = dynamoose.model("variables", VariableSchema);
    }

    return this.variablesModel;
  }

  public getTypeModel(): ModelType<Document> {
    if (!this.typeModel) {
      this.typeModel = dynamoose.model("types", TypeSchema);
    }

    return this.typeModel;
  }
}
