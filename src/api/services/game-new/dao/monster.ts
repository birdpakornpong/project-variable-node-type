import { injectable } from "inversify";
import { Monsters } from "../game-new-service";

@injectable()
export class MonsterPvP implements Monsters {
  getMonster(): string {
    return Math.random() > 0.5 ? "Zeus" : "Hera";
  }
  getDetailPVP(): DetailPVP {
    const level = Number(Math.random().toFixed(2)) * 100;
    const power = Number(Math.random().toFixed(2)) * 100;
    const hp = Number(Math.random().toFixed(2)) * 10000;
    const debulf = Number(Math.random().toFixed(2)) * 100;
    const bulf = Number(Math.random().toFixed(2)) * 100;
    return {
      level,
      power,
      hp,
      debulf,
      bulf,
    };
  }
}
