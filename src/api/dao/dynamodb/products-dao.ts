import { AnyDocument } from "dynamoose/dist/Document";
import { ModelType } from "dynamoose/dist/General";
import { inject, injectable } from "inversify";
import { TYPES } from "src/ioc/type";
import { IProductsDao } from "../products.dao";

@injectable()
export class ProductsDao implements IProductsDao {
  constructor(
    @inject(TYPES.ProductsModel)
    private readonly productsModel: ModelType<AnyDocument>
  ) {}

  public async getScan() {
    const result = this.productsModel.scan("name").contains("c").exec();
    return result;
  }
}
