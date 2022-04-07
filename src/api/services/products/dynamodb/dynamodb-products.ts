import { inject, injectable } from "inversify";
import { IProductsDao } from "src/api/dao/products.dao";
import { TYPES } from "src/ioc/type";
import { ProductService } from "../product-service";

@injectable()
export class DynamoDbProductService implements ProductService {
  constructor(
    @inject(TYPES.ProductDao) private readonly productDao: IProductsDao
  ) {}

  public async getScan() {
    const result = await this.productDao.getScan();
    return result;
  }
}
