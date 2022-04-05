import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  queryParam,
  requestParam,
  httpDelete,
  requestHeaders,
  httpPost,
  requestBody,
} from "inversify-express-utils";
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

  @httpGet("/byId") //http://localhost:3000/student/byId?id=1
  public getById(
    @queryParam("id") id: string // eslint-disable-line @typescript-eslint/indent
  ) {
    return this.studentRoomService.getById(id);
  }

  @httpGet("/by-id/:id") //http://localhost:3000/student/byId/1
  public getByIds(
    @requestParam("id") id: string // eslint-disable-line @typescript-eslint/indent
  ) {
    return this.studentRoomService.getById(id);
  }

  @httpDelete("/delete/:id")
  private deleteById(
    @requestParam("id") id: string // eslint-disable-line @typescript-eslint/indent
  ) {
    return this.studentRoomService.deleteStudent(Number(id));
  }

  @httpGet("/get-by-id")
  private getByIdReqHeader(
    @requestHeaders("ids") ids: string // eslint-disable-line @typescript-eslint/indent
  ) {
    return this.studentRoomService.getById(Number(ids));
  }

  @httpPost("/create")
  private create(
    @requestBody() student: any // eslint-disable-line @typescript-eslint/indent
  ) {
    const { firstName, lastName, age, point } = student;
    return this.studentRoomService.addStudent(firstName, lastName, age, point);
  }
}
