import { inject } from "inversify";
import { controller, httpGet, interfaces } from "inversify-express-utils";
import { TYPES } from "src/ioc/type";
import { ProductService } from "../services/products/product-service";

@controller("/product")
export class ProductController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ProductService) private productService: ProductService
  ) {}

  @httpGet("/get")
  public get() {
    return this.productService.getScan();
  }
}
