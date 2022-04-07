import { inject, injectable } from "inversify";
import { Objects } from "src/api/interfaces/interfaces";
import { TYPES } from "src/ioc/type";
import { Type } from "typescript";
import { Monsters, Warriors, WeaponWarriors } from "../game-new-service";

@injectable()
export class WeaponWarriorC implements WeaponWarriors {
  public getWeaponRandom() {
    const weapon = Math.random() > 0.5 ? "katana" : "sword";
    return weapon;
  }
}

@injectable()
export class WarriorC implements Warriors {
  private _weapon: WeaponWarriors;
  private _monster: Monsters;
  constructor(
    @inject(TYPES.WeaponWarriors) weapon: WeaponWarriors,
    @inject(TYPES.Monsters) monster: Monsters
  ) {
    this._weapon = weapon;
    this._monster = monster;
  }
  public detail(): Detail {
    const type = Math.random() > 0.5 ? "Ninja" : "Ronin";
    const gender = Math.random() > 0.5 ? "Men" : "Women";
    const randomWeapon = this._weapon.getWeaponRandom();
    const monster = this._monster.getMonster();
    return {
      type: type,
      gender: gender,
      weapon: randomWeapon,
      god: monster,
    };
  }
  public getDetailPVP(): DetailPVP {
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
