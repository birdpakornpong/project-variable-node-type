import { inject } from "inversify";
import { controller, httpGet, interfaces } from "inversify-express-utils";
import { TYPES } from "src/ioc/type";
import { Warrior } from "../services/game/game-service";

@controller("/game")
export class GameController implements interfaces.Controller {
  constructor(@inject(TYPES.Warrior) private warrior: Warrior) {}

  @httpGet("/")
  public getNinja() {
    return this.warrior.fight();
  }
}
