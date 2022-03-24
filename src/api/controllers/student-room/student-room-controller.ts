import { inject } from "inversify";
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { StudentRoomService } from "src/api/services/student-room/student-room-service";

@controller("/student")
export class StudentRoomController implements interfaces.Controller {
  constructor(
    @inject("StudentRoomService") private studentRoomService: StudentRoomService
  ) {}

  @httpGet("/")
  public getHello() {
    return this.studentRoomService.getAll();
  }
}
