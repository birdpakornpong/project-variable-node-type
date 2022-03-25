/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/controllers/home/home-controller.ts":
/*!*****************************************************!*\
  !*** ./src/api/controllers/home/home-controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeController = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    getHello() {
        return this.homeService.getHello();
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "getHello", null);
HomeController = __decorate([
    (0, inversify_express_utils_1.controller)("/"),
    __param(0, (0, inversify_1.inject)("HomeService")),
    __metadata("design:paramtypes", [Object])
], HomeController);
exports.HomeController = HomeController;


/***/ }),

/***/ "./src/api/controllers/index.ts":
/*!**************************************!*\
  !*** ./src/api/controllers/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./home/home-controller */ "./src/api/controllers/home/home-controller.ts");
__webpack_require__(/*! ./student-room/student-room-controller */ "./src/api/controllers/student-room/student-room-controller.ts");


/***/ }),

/***/ "./src/api/controllers/student-room/student-room-controller.ts":
/*!*********************************************************************!*\
  !*** ./src/api/controllers/student-room/student-room-controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentRoomController = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
let StudentRoomController = class StudentRoomController {
    constructor(studentRoomService) {
        this.studentRoomService = studentRoomService;
    }
    getHello() {
        return this.studentRoomService.getAll();
    }
    getById(id // eslint-disable-line @typescript-eslint/indent
    ) {
        return this.studentRoomService.getById(id);
    }
    getByIds(id // eslint-disable-line @typescript-eslint/indent
    ) {
        return this.studentRoomService.getById(id);
    }
    deleteById(id // eslint-disable-line @typescript-eslint/indent
    ) {
        return this.studentRoomService.deleteStudent(Number(id));
    }
    getByIdReqHeader(ids // eslint-disable-line @typescript-eslint/indent
    ) {
        return this.studentRoomService.getById(Number(ids));
    }
    create(student // eslint-disable-line @typescript-eslint/indent
    ) {
        console.log('student', student);
        const { firstName, lastName, age, point } = student;
        return this.studentRoomService.addStudent(firstName, lastName, age, point);
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getHello", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/byId"),
    __param(0, (0, inversify_express_utils_1.queryParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getById", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/by-id/:id"),
    __param(0, (0, inversify_express_utils_1.requestParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getByIds", null);
__decorate([
    (0, inversify_express_utils_1.httpDelete)("/delete/:id"),
    __param(0, (0, inversify_express_utils_1.requestParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "deleteById", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/get-by-id"),
    __param(0, (0, inversify_express_utils_1.requestHeaders)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getByIdReqHeader", null);
__decorate([
    (0, inversify_express_utils_1.httpPost)("/create"),
    __param(0, (0, inversify_express_utils_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "create", null);
StudentRoomController = __decorate([
    (0, inversify_express_utils_1.controller)("/student"),
    __param(0, (0, inversify_1.inject)("StudentRoomService")),
    __metadata("design:paramtypes", [Object])
], StudentRoomController);
exports.StudentRoomController = StudentRoomController;


/***/ }),

/***/ "./src/api/services/home-service/manage/home-manage.ts":
/*!*************************************************************!*\
  !*** ./src/api/services/home-service/manage/home-manage.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let Home = class Home {
    getHello() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = [
                { name: "bird", lastname: "hirun" },
                { name: "pang", lastname: "hirsn" },
            ];
            return users;
        });
    }
};
Home = __decorate([
    (0, inversify_1.injectable)()
], Home);
exports.Home = Home;


/***/ }),

/***/ "./src/api/services/student-room/manage/student-room-manage.ts":
/*!*********************************************************************!*\
  !*** ./src/api/services/student-room/manage/student-room-manage.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentRoomManage = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let StudentRoomManage = class StudentRoomManage {
    constructor() {
        this.studentList = [
            { id: 1, firstName: "bird", lastName: "test", age: 25, point: 65 },
        ];
    }
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
        console.log('this.studentList', this.studentList);
    }
    getAll() {
        console.log('get', this.studentList);
        return this.studentList;
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.studentList.filter((item) => item.id == id);
            return person;
        });
    }
    updateStudent(id, firstName = "default", lastName = "default", age = 25, point = 99) {
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
};
StudentRoomManage = __decorate([
    (0, inversify_1.injectable)()
], StudentRoomManage);
exports.StudentRoomManage = StudentRoomManage;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata"); // สำคัญมาก in บรรทัด 1
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ "swagger-ui-express"));
const yamljs_1 = __importDefault(__webpack_require__(/*! yamljs */ "yamljs"));
const invensify_config_1 = __importDefault(__webpack_require__(/*! ./ioc/invensify.config */ "./src/ioc/invensify.config.ts"));
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const server = new inversify_express_utils_1.InversifyExpressServer(invensify_config_1.default);
const port = 3000;
const swaggerDocument = yamljs_1.default.load("./swagger.yaml");
server
    .setConfig((app) => {
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    app.use(express_1.default.json());
    // app.use(RequestLogMiddleware.handle, RequestLogMiddleware.responseInterceptor());
})
    .build()
    .listen(port, () => {
    console.log(`The service has been up and running on ${port} port`);
});


/***/ }),

/***/ "./src/ioc/invensify.config.ts":
/*!*************************************!*\
  !*** ./src/ioc/invensify.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const home_manage_1 = __webpack_require__(/*! src/api/services/home-service/manage/home-manage */ "./src/api/services/home-service/manage/home-manage.ts");
const student_room_manage_1 = __webpack_require__(/*! src/api/services/student-room/manage/student-room-manage */ "./src/api/services/student-room/manage/student-room-manage.ts");
__webpack_require__(/*! ../api/controllers */ "./src/api/controllers/index.ts");
const container = new inversify_1.Container();
container.bind("HomeService").to(home_manage_1.Home);
container.bind("StudentRoomService").to(student_room_manage_1.StudentRoomManage);
exports["default"] = container;


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "inversify-express-utils":
/*!******************************************!*\
  !*** external "inversify-express-utils" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("inversify-express-utils");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "yamljs":
/*!*************************!*\
  !*** external "yamljs" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("yamljs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map