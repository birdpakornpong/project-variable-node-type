import { Container } from "inversify";
import { HomeService } from "src/api/services/home-service/home-service";
import { Home } from "src/api/services/home-service/manage/home-manage";
import { StudentRoomManage } from "src/api/services/student-room/manage/student-room-manage";
import { StudentRoomService } from "src/api/services/student-room/student-room-service";
import "../api/controllers";

const container = new Container();

container.bind<HomeService>("HomeService").to(Home);
container.bind<StudentRoomService>("StudentRoomService").to(StudentRoomManage);

export default container;
