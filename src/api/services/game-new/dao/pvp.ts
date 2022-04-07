import { inject, injectable } from "inversify";
import { Arrays } from "src/api/interfaces/interfaces";
import { TYPES } from "src/ioc/type";
import { Monsters, PvPMode, Warriors } from "../game-new-service";
import { MonsterPvP } from "./monster";

@injectable()
export class PlayerPVP implements PvPMode {
  private _player: Warriors;
  private _monster: Monsters;
  constructor(
    @inject(TYPES.Warriors) player: Warriors,
    @inject(TYPES.Monsters) monster: Monsters
  ) {
    this._player = player;
    this._monster = monster;
  }
  pvpMode(): Arrays {
    const playerDetail = this._player.getDetailPVP();
    const monsterDetail = this._monster.getDetailPVP();

    const powerPlayer =
      ((playerDetail.level * playerDetail.power + playerDetail.hp) *
        playerDetail.bulf) /
      playerDetail.debulf;
    const powerMonster =
      ((monsterDetail.level * monsterDetail.power + monsterDetail.hp) *
        monsterDetail.bulf) /
      monsterDetail.debulf;
    const result = powerPlayer - powerMonster > 0 ? "Player Win" : "Monster Win";
    return [
      {
        player: playerDetail,
        powerPlayer,
      },
      {
        monster: monsterDetail,
        powerMonster,
      },
      { result },
    ];
  }
}
