/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/controllers/game-controller.ts":
/*!************************************************!*\
  !*** ./src/api/controllers/game-controller.ts ***!
  \************************************************/
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
exports.GameController = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let GameController = class GameController {
    constructor(warrior) {
        this.warrior = warrior;
    }
    getNinja() {
        return this.warrior.fight();
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getNinja", null);
GameController = __decorate([
    (0, inversify_express_utils_1.controller)("/game"),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.Warrior)),
    __metadata("design:paramtypes", [Object])
], GameController);
exports.GameController = GameController;


/***/ }),

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
__webpack_require__(/*! ./game-controller */ "./src/api/controllers/game-controller.ts");
__webpack_require__(/*! ./product-controller */ "./src/api/controllers/product-controller.ts");


/***/ }),

/***/ "./src/api/controllers/product-controller.ts":
/*!***************************************************!*\
  !*** ./src/api/controllers/product-controller.ts ***!
  \***************************************************/
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
exports.ProductController = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    get() {
        return this.productService.getScan();
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "get", null);
ProductController = __decorate([
    (0, inversify_express_utils_1.controller)("/product"),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.ProductService)),
    __metadata("design:paramtypes", [Object])
], ProductController);
exports.ProductController = ProductController;


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
    (0, inversify_express_utils_1.httpGet)("/byId") //http://localhost:3000/student/byId?id=1
    ,
    __param(0, (0, inversify_express_utils_1.queryParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getById", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/by-id/:id") //http://localhost:3000/student/byId/1
    ,
    __param(0, (0, inversify_express_utils_1.requestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "getByIds", null);
__decorate([
    (0, inversify_express_utils_1.httpDelete)("/delete/:id"),
    __param(0, (0, inversify_express_utils_1.requestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentRoomController.prototype, "deleteById", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/get-by-id"),
    __param(0, (0, inversify_express_utils_1.requestHeaders)("ids")),
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

/***/ "./src/api/dao/dynamodb/products-dao.ts":
/*!**********************************************!*\
  !*** ./src/api/dao/dynamodb/products-dao.ts ***!
  \**********************************************/
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
exports.ProductsDao = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let ProductsDao = class ProductsDao {
    constructor(productsModel) {
        this.productsModel = productsModel;
    }
    getScan() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.productsModel.scan("name").contains("c").exec();
            return result;
        });
    }
};
ProductsDao = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.ProductsModel)),
    __metadata("design:paramtypes", [Object])
], ProductsDao);
exports.ProductsDao = ProductsDao;


/***/ }),

/***/ "./src/api/models/models-provider.ts":
/*!*******************************************!*\
  !*** ./src/api/models/models-provider.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelsProvider = void 0;
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
const product_schema_1 = __webpack_require__(/*! ./schemas/product-schema */ "./src/api/models/schemas/product-schema.ts");
class ModelsProvider {
    constructor() { }
    static getInstance() {
        if (!ModelsProvider.instance) {
            ModelsProvider.instance = new ModelsProvider();
        }
        return ModelsProvider.instance;
    }
    getProductsModel() {
        if (!this.productsModel) {
            this.productsModel = dynamoose.model("Products", product_schema_1.ProductsSchema);
        }
        return this.productsModel;
    }
}
exports.ModelsProvider = ModelsProvider;


/***/ }),

/***/ "./src/api/models/schemas/product-schema.ts":
/*!**************************************************!*\
  !*** ./src/api/models/schemas/product-schema.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsSchema = void 0;
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
exports.ProductsSchema = new dynamoose.Schema({
    id: {
        type: Number,
        hashKey: true,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sk: {
        type: String,
        rangeKey: true,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'CreateDate',
        updatedAt: 'UpdateDate'
    }
});


/***/ }),

/***/ "./src/api/services/game-new/dao/game-new-dao.ts":
/*!*******************************************************!*\
  !*** ./src/api/services/game-new/dao/game-new-dao.ts ***!
  \*******************************************************/
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
exports.WarriorC = exports.WeaponWarriorC = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let WeaponWarriorC = class WeaponWarriorC {
    getWeaponRandom() {
        const weapon = Math.random() > 0.5 ? "katana" : "sword";
        return weapon;
    }
};
WeaponWarriorC = __decorate([
    (0, inversify_1.injectable)()
], WeaponWarriorC);
exports.WeaponWarriorC = WeaponWarriorC;
let WarriorC = class WarriorC {
    constructor(weapon, monster) {
        this._weapon = weapon;
        this._monster = monster;
    }
    detail() {
        const type = Math.random() > 0.5 ? "Ninja" : "Ronin";
        const gender = Math.random() > 0.5 ? "Men" : "Women";
        const randomWeapon = this._weapon.getWeaponRandom();
        const monster = this._monster.getMonster();
        return {
            type: type,
            gender: gender,
            weapon: randomWeapon,
            god: monster,
        };
    }
    getDetailPVP() {
        const level = Number(Math.random().toFixed(2)) * 100;
        const power = Number(Math.random().toFixed(2)) * 100;
        const hp = Number(Math.random().toFixed(2)) * 10000;
        const debulf = Number(Math.random().toFixed(2)) * 100;
        const bulf = Number(Math.random().toFixed(2)) * 100;
        return {
            level,
            power,
            hp,
            debulf,
            bulf,
        };
    }
};
WarriorC = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.WeaponWarriors)),
    __param(1, (0, inversify_1.inject)(type_1.TYPES.Monsters)),
    __metadata("design:paramtypes", [Object, Object])
], WarriorC);
exports.WarriorC = WarriorC;


/***/ }),

/***/ "./src/api/services/game-new/dao/monster.ts":
/*!**************************************************!*\
  !*** ./src/api/services/game-new/dao/monster.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonsterPvP = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let MonsterPvP = class MonsterPvP {
    getMonster() {
        return Math.random() > 0.5 ? "Zeus" : "Hera";
    }
    getDetailPVP() {
        const level = Number(Math.random().toFixed(2)) * 100;
        const power = Number(Math.random().toFixed(2)) * 100;
        const hp = Number(Math.random().toFixed(2)) * 10000;
        const debulf = Number(Math.random().toFixed(2)) * 100;
        const bulf = Number(Math.random().toFixed(2)) * 100;
        return {
            level,
            power,
            hp,
            debulf,
            bulf,
        };
    }
};
MonsterPvP = __decorate([
    (0, inversify_1.injectable)()
], MonsterPvP);
exports.MonsterPvP = MonsterPvP;


/***/ }),

/***/ "./src/api/services/game-new/dao/pvp.ts":
/*!**********************************************!*\
  !*** ./src/api/services/game-new/dao/pvp.ts ***!
  \**********************************************/
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
exports.PlayerPVP = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let PlayerPVP = class PlayerPVP {
    constructor(player, monster) {
        this._player = player;
        this._monster = monster;
    }
    pvpMode() {
        const playerDetail = this._player.getDetailPVP();
        const monsterDetail = this._monster.getDetailPVP();
        const powerPlayer = ((playerDetail.level * playerDetail.power + playerDetail.hp) *
            playerDetail.bulf) /
            playerDetail.debulf;
        const powerMonster = ((monsterDetail.level * monsterDetail.power + monsterDetail.hp) *
            monsterDetail.bulf) /
            monsterDetail.debulf;
        const result = powerPlayer - powerMonster > 0 ? "Player Win" : "Monster Win";
        return [
            {
                player: playerDetail,
                powerPlayer,
            },
            {
                monster: monsterDetail,
                powerMonster,
            },
            { result },
        ];
    }
};
PlayerPVP = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.Warriors)),
    __param(1, (0, inversify_1.inject)(type_1.TYPES.Monsters)),
    __metadata("design:paramtypes", [Object, Object])
], PlayerPVP);
exports.PlayerPVP = PlayerPVP;


/***/ }),

/***/ "./src/api/services/game/dao/game-dao.ts":
/*!***********************************************!*\
  !*** ./src/api/services/game/dao/game-dao.ts ***!
  \***********************************************/
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
exports.Shuriken = exports.Katana = exports.Ninja = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let Katana = class Katana {
    hit() {
        return "cut!";
    }
};
Katana = __decorate([
    (0, inversify_1.injectable)()
], Katana);
exports.Katana = Katana;
let Shuriken = class Shuriken {
    throw() {
        return "hit!";
    }
};
Shuriken = __decorate([
    (0, inversify_1.injectable)()
], Shuriken);
exports.Shuriken = Shuriken;
let Ninja = class Ninja {
    constructor(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    fight() {
        return this._katana.hit();
    }
    sneak() {
        return this._shuriken.throw();
    }
};
Ninja = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.Weapon)),
    __param(1, (0, inversify_1.inject)(type_1.TYPES.ThrowableWeapon)),
    __metadata("design:paramtypes", [Object, Object])
], Ninja);
exports.Ninja = Ninja;


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

/***/ "./src/api/services/products/dynamodb/dynamodb-products.ts":
/*!*****************************************************************!*\
  !*** ./src/api/services/products/dynamodb/dynamodb-products.ts ***!
  \*****************************************************************/
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
exports.DynamoDbProductService = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let DynamoDbProductService = class DynamoDbProductService {
    constructor(productDao) {
        this.productDao = productDao;
    }
    getScan() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productDao.getScan();
            return result;
        });
    }
};
DynamoDbProductService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.ProductDao)),
    __metadata("design:paramtypes", [Object])
], DynamoDbProductService);
exports.DynamoDbProductService = DynamoDbProductService;


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
    }
    getAll() {
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
const type_1 = __webpack_require__(/*! ./ioc/type */ "./src/ioc/type.ts");
const server = new inversify_express_utils_1.InversifyExpressServer(invensify_config_1.default);
const port = 3000;
const swaggerDocument = yamljs_1.default.load("./swagger.yaml");
const ninja = invensify_config_1.default.get(type_1.TYPES.Warrior);
// console.log('ninja', ninja.fight())
const warriorC = invensify_config_1.default.get(type_1.TYPES.Warriors);
// console.log('warriorC', warriorC.getDetailPVP())
const monster = invensify_config_1.default.get(type_1.TYPES.Monsters);
// monster.getDetailPVP()
const pvp = invensify_config_1.default.get(type_1.TYPES.PVPMode);
console.log(" pvp", pvp.pvpMode());
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const models_provider_1 = __webpack_require__(/*! src/api/models/models-provider */ "./src/api/models/models-provider.ts");
const game_new_dao_1 = __webpack_require__(/*! src/api/services/game-new/dao/game-new-dao */ "./src/api/services/game-new/dao/game-new-dao.ts");
const monster_1 = __webpack_require__(/*! src/api/services/game-new/dao/monster */ "./src/api/services/game-new/dao/monster.ts");
const pvp_1 = __webpack_require__(/*! src/api/services/game-new/dao/pvp */ "./src/api/services/game-new/dao/pvp.ts");
const game_dao_1 = __webpack_require__(/*! src/api/services/game/dao/game-dao */ "./src/api/services/game/dao/game-dao.ts");
const home_manage_1 = __webpack_require__(/*! src/api/services/home-service/manage/home-manage */ "./src/api/services/home-service/manage/home-manage.ts");
const student_room_manage_1 = __webpack_require__(/*! src/api/services/student-room/manage/student-room-manage */ "./src/api/services/student-room/manage/student-room-manage.ts");
__webpack_require__(/*! ../api/controllers */ "./src/api/controllers/index.ts");
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
const type_1 = __webpack_require__(/*! ./type */ "./src/ioc/type.ts");
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
const dynamodb_products_1 = __webpack_require__(/*! src/api/services/products/dynamodb/dynamodb-products */ "./src/api/services/products/dynamodb/dynamodb-products.ts");
const products_dao_1 = __webpack_require__(/*! src/api/dao/dynamodb/products-dao */ "./src/api/dao/dynamodb/products-dao.ts");
const container = new inversify_1.Container();
// Table
container.bind(type_1.TYPES.ModelsProvider)
    .toDynamicValue(() => models_provider_1.ModelsProvider.getInstance())
    .inSingletonScope()
    .onActivation((context, injectable) => {
    console.log('1');
    // dynamoose.aws.ddb.local('http://localhost:8000');
    const dynamoDBClient = new aws_sdk_1.DynamoDB({
        region: "local",
        endpoint: 'http://localhost:8000',
    });
    dynamoose.aws.ddb.set(dynamoDBClient);
    return injectable;
});
container
    .bind(type_1.TYPES.ProductsModel)
    .toDynamicValue((context) => {
    const modelsProvider = context.container.get(type_1.TYPES.ModelsProvider);
    return modelsProvider.getProductsModel();
})
    .inSingletonScope();
container.bind(type_1.TYPES.ProductDao).to(products_dao_1.ProductsDao);
container.bind(type_1.TYPES.ProductService).to(dynamodb_products_1.DynamoDbProductService);
container.bind("HomeService").to(home_manage_1.Home);
container.bind("StudentRoomService").to(student_room_manage_1.StudentRoomManage);
container.bind(type_1.TYPES.Warrior).to(game_dao_1.Ninja);
container.bind(type_1.TYPES.Weapon).to(game_dao_1.Katana);
container.bind(type_1.TYPES.ThrowableWeapon).to(game_dao_1.Shuriken);
container.bind(type_1.TYPES.Warriors).to(game_new_dao_1.WarriorC);
container.bind(type_1.TYPES.WeaponWarriors).to(game_new_dao_1.WeaponWarriorC);
container.bind(type_1.TYPES.Monsters).to(monster_1.MonsterPvP);
container.bind(type_1.TYPES.PVPMode).to(pvp_1.PlayerPVP);
exports["default"] = container;


/***/ }),

/***/ "./src/ioc/type.ts":
/*!*************************!*\
  !*** ./src/ioc/type.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TYPES = void 0;
const TYPES = {
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon"),
    Warriors: Symbol.for("Warriors"),
    WeaponWarriors: Symbol.for("WeaponWarriors"),
    Monsters: Symbol.for("Monsters"),
    PVPMode: Symbol.for("PvPMode"),
    ModelsProvider: Symbol.for('models-provider'),
    ProductsModel: Symbol.for('products-model'),
    ProductDao: Symbol.for('products-dao'),
    ProductService: Symbol.for('product-service')
};
exports.TYPES = TYPES;


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("dynamoose");

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