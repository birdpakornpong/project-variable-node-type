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


/***/ }),

/***/ "./src/api/services/homeService/manage/home-manage.ts":
/*!************************************************************!*\
  !*** ./src/api/services/homeService/manage/home-manage.ts ***!
  \************************************************************/
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
            let users = [
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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata"); // สำคัญมาก
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
})
    .setErrorConfig((app) => {
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
const home_manage_1 = __webpack_require__(/*! src/api/services/homeService/manage/home-manage */ "./src/api/services/homeService/manage/home-manage.ts");
__webpack_require__(/*! ../api/controllers */ "./src/api/controllers/index.ts");
let container = new inversify_1.Container();
container.bind('HomeService').to(home_manage_1.Home);
exports["default"] = container;


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