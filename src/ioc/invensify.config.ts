import { Container } from "inversify";
import {
  WarriorC,
  WeaponWarriorC,
} from "src/api/services/game-new/dao/game-new-dao";
import { MonsterPvP } from "src/api/services/game-new/dao/monster";
import { PlayerPVP } from "src/api/services/game-new/dao/pvp";
import {
  Monsters,
  PvPMode,
  Warriors,
  WeaponWarriors,
} from "src/api/services/game-new/game-new-service";
import { Katana, Ninja, Shuriken } from "src/api/services/game/dao/game-dao";
import {
  ThrowableWeapon,
  Warrior,
  Weapon,
} from "src/api/services/game/game-service";
import { HomeService } from "src/api/services/home-service/home-service";
import { Home } from "src/api/services/home-service/manage/home-manage";
import { StudentRoomManage } from "src/api/services/student-room/manage/student-room-manage";
import { StudentRoomService } from "src/api/services/student-room/student-room-service";
import "../api/controllers";
import { TYPES } from "./type";

const container = new Container();

container.bind<HomeService>("HomeService").to(Home);

container.bind<StudentRoomService>("StudentRoomService").to(StudentRoomManage);
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
container.bind<Warriors>(TYPES.Warriors).to(WarriorC);
container.bind<WeaponWarriors>(TYPES.WeaponWarriors).to(WeaponWarriorC);
container.bind<Monsters>(TYPES.Monsters).to(MonsterPvP);
container.bind<PvPMode>(TYPES.PVPMode).to(PlayerPVP);

export default container;
