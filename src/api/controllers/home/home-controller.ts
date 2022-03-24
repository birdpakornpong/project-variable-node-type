import { inject } from "inversify";
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { HomeService } from "src/api/services/home-service/home-service";

@controller("/")
export class HomeController implements interfaces.Controller {
  constructor(@inject("HomeService") private homeService: HomeService) {}

  @httpGet("/")
  public getHello() {
    return this.homeService.getHello();
  }
}
