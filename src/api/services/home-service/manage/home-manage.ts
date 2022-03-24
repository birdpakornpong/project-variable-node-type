import { injectable } from "inversify";
import { Arrays, Nullable } from "src/api/interfaces/interfaces";
import { HomeService } from "../home-service";

@injectable()
export class Home implements HomeService {
  async getHello(): Promise<Nullable<Arrays>> {
    const users = [
      { name: "bird", lastname: "hirun" },
      { name: "pang", lastname: "hirsn" },
    ];

    return users;
  }
}
