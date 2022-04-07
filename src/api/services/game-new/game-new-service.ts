import { Arrays, Objects } from "src/api/interfaces/interfaces";

export interface Warriors {
  detail(): Detail;
  getDetailPVP(): DetailPVP;
}

export interface WeaponWarriors {
  getWeaponRandom(): string;
}

export interface Monsters {
  getMonster(): string;
  getDetailPVP(): DetailPVP;
}

export interface PvPMode {
  pvpMode(): Arrays;
}
