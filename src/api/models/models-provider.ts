import { ModelType } from "dynamoose/dist/General";
import { Document } from "dynamoose/dist/Document";
import * as dynamoose from "dynamoose";
import { ProductsSchema } from "./schemas/product-schema";
import { VariableSchema } from "./schemas/variable-schema";

export class ModelsProvider {
  private static instance: ModelsProvider;

  private productsModel!: ModelType<Document>; // model table
  private variablesModel!: ModelType<Document>;

  public static getInstance(): ModelsProvider {
    if (!ModelsProvider.instance) {
      ModelsProvider.instance = new ModelsProvider();
    }

    return ModelsProvider.instance;
  }

  public getProductsModel(): ModelType<Document> {
    if (!this.productsModel) {
      this.productsModel = dynamoose.model("Products", ProductsSchema);
    }

    return this.productsModel;
  }

  public getVariableModel(): ModelType<Document> {
    if (!this.variablesModel) {
      this.variablesModel = dynamoose.model("variables", VariableSchema);
    }

    return this.variablesModel;
  }
}
