import { injectable } from "inversify";
import { StudentRoom } from "src/api/interfaces/student-room-interface";
import { StudentRoomService } from "../student-room-service";

@injectable()
export class StudentRoomManage implements StudentRoomService {
  private studentList: StudentRoom[] = [
    { id: 1, firstName: "bird", lastName: "test", age: 25, point: 65 },
  ];

  addStudent(firstName, lastName, age, point) {
    const length = this.studentList.length;
    const person = {
      id: length + 1,
      firstName,
      lastName,
      age,
      point,
    };
    this.studentList.push(person);
  }

  getAll() {
    return this.studentList;
  }

  getById(id) {
    const person = this.studentList.filter((item) => item.id == id);
    return person;
  }

  updateStudent(
    id,
    firstName = "default",
    lastName = "default",
    age = 25,
    point = 99
  ) {
    let person = this.studentList.find((item) => item.id == id);
    person = {
      id,
      firstName,
      lastName,
      age,
      point,
    };
    this.studentList[id - 1] = person;
    return person;
  }

  deleteStudent(id) {
    const person = this.studentList.filter((item) => item.id !== id);
    this.studentList = person;
    return this.studentList;
  }
}
