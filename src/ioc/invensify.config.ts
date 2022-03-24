import { Container } from "inversify";
import { HomeService } from "src/api/services/homeService/home-service";
import { Home } from "src/api/services/homeService/manage/home-manage";
import "../api/controllers";

const container = new Container();

container.bind<HomeService>("HomeService").to(Home);

export default container;
