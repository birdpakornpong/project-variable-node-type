export interface StudentRoomService {
  addStudent(firstName: any, lastName: any, age: any, point: any): any;
  getAll(): any;
  getById(id: any): any;
  updateStudent(id, firstName: any, lastName: any, age: any, point: any);
  deleteStudent(id);
}
