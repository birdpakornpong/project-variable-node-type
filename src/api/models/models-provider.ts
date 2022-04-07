import { ModelType } from "dynamoose/dist/General";
import { Document } from "dynamoose/dist/Document";
import * as dynamoose from "dynamoose";
import { ProductsSchema } from "./schemas/product-schema";

export class ModelsProvider {
  private static instance: ModelsProvider;

  private productsModel!: ModelType<Document>; // model table


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
}
