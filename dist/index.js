/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/controllers/index.ts":
/*!**************************************!*\
  !*** ./src/api/controllers/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//  variable
__webpack_require__(/*! ./variable-controller */ "./src/api/controllers/variable-controller.ts");
// type
__webpack_require__(/*! ./type-controller */ "./src/api/controllers/type-controller.ts");


/***/ }),

/***/ "./src/api/controllers/type-controller.ts":
/*!************************************************!*\
  !*** ./src/api/controllers/type-controller.ts ***!
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
exports.Typecontroller = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
const dynamodb_type_1 = __webpack_require__(/*! ../services/type/dynamodb/dynamodb-type */ "./src/api/services/type/dynamodb/dynamodb-type.ts");
let Typecontroller = class Typecontroller {
    constructor(typeService) {
        this.typeService = typeService;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.typeService.create(data);
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)("/create"),
    __param(0, (0, inversify_express_utils_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Typecontroller.prototype, "create", null);
Typecontroller = __decorate([
    (0, inversify_express_utils_1.controller)("/type"),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.TypeService)),
    __metadata("design:paramtypes", [dynamodb_type_1.TypeService])
], Typecontroller);
exports.Typecontroller = Typecontroller;


/***/ }),

/***/ "./src/api/controllers/variable-controller.ts":
/*!****************************************************!*\
  !*** ./src/api/controllers/variable-controller.ts ***!
  \****************************************************/
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
exports.VariableController = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
const dynamodb_variable_1 = __webpack_require__(/*! ../services/variable/dynamodb/dynamodb-variable */ "./src/api/services/variable/dynamodb/dynamodb-variable.ts");
let VariableController = class VariableController {
    constructor(variableService) {
        this.variableService = variableService;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.variableService.create(data);
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
    getRelationType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.variableService.getRelationType();
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
    getStartAll(startAt, // ?startAt=10
    limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.variableService.getStartAtLimit(startAt, limit);
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)("/create"),
    __param(0, (0, inversify_express_utils_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VariableController.prototype, "create", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("/getType") // test
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VariableController.prototype, "getRelationType", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)("getStart"),
    __param(0, (0, inversify_express_utils_1.queryParam)("startAt")),
    __param(1, (0, inversify_express_utils_1.queryParam)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VariableController.prototype, "getStartAll", null);
VariableController = __decorate([
    (0, inversify_express_utils_1.controller)("/variable"),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.VariableService)),
    __metadata("design:paramtypes", [dynamodb_variable_1.VariableService])
], VariableController);
exports.VariableController = VariableController;


/***/ }),

/***/ "./src/api/dao/dynamodb/type-dao.ts":
/*!******************************************!*\
  !*** ./src/api/dao/dynamodb/type-dao.ts ***!
  \******************************************/
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
exports.TypeDao = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let TypeDao = class TypeDao {
    constructor(typeModel) {
        this.typeModel = typeModel;
    }
    lengthTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const length = yield this.typeModel.scan().count().exec();
            return length;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { count } = yield this.lengthTable();
            try {
                const result = yield this.typeModel.create({
                    id: Number(count) + 1,
                    name: data.name,
                    description: data.description,
                    sk: data.sk,
                });
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
};
TypeDao = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.TypeModel)),
    __metadata("design:paramtypes", [Object])
], TypeDao);
exports.TypeDao = TypeDao;


/***/ }),

/***/ "./src/api/dao/dynamodb/variable-dao.ts":
/*!**********************************************!*\
  !*** ./src/api/dao/dynamodb/variable-dao.ts ***!
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
exports.VariableDao = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let VariableDao = class VariableDao {
    constructor(variableModel) {
        this.variableModel = variableModel;
    }
    lengthTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const length = yield this.variableModel.scan().count().exec();
            return length;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { count } = yield this.lengthTable();
            try {
                const result = yield this.variableModel.create({
                    id: Number(count) + 1,
                    userId: data.userId,
                    variable: data.variable,
                    description: data.description,
                    typeId: data.typeId,
                    mean: data.mean,
                    sk: data.sk,
                });
                return result;
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
    getRelationType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.variableModel.get({ "id": 1, "sk": "test" });
        });
    }
    getStartAtLimit(startAt, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.variableModel.scan().limit(startAt).exec();
            const result = yield this.variableModel.scan().startAt(response.lastKey).limit(limit).exec();
            const resultSerialize = result.map((res) => res.serialize());
            return resultSerialize;
        });
    }
};
VariableDao = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.VariableModel)),
    __metadata("design:paramtypes", [Object])
], VariableDao);
exports.VariableDao = VariableDao;


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
const variable_schema_1 = __webpack_require__(/*! ./schemas/variable-schema */ "./src/api/models/schemas/variable-schema.ts");
const type_schema_1 = __webpack_require__(/*! ./schemas/type-schema */ "./src/api/models/schemas/type-schema.ts");
class ModelsProvider {
    static getInstance() {
        if (!ModelsProvider.instance) {
            ModelsProvider.instance = new ModelsProvider();
        }
        return ModelsProvider.instance;
    }
    getVariableModel() {
        if (!this.variablesModel) {
            this.variablesModel = dynamoose.model("variables", variable_schema_1.VariableSchema);
        }
        return this.variablesModel;
    }
    getTypeModel() {
        if (!this.typeModel) {
            this.typeModel = dynamoose.model("types", type_schema_1.TypeSchema);
        }
        return this.typeModel;
    }
}
exports.ModelsProvider = ModelsProvider;


/***/ }),

/***/ "./src/api/models/schemas/type-schema.ts":
/*!***********************************************!*\
  !*** ./src/api/models/schemas/type-schema.ts ***!
  \***********************************************/
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
exports.TypeSchema = void 0;
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
exports.TypeSchema = new dynamoose.Schema({
    id: {
        type: Number,
        hashKey: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sk: {
        type: String,
        rangeKey: true,
        required: true
    }
}, {
    timestamps: {
        createdAt: "CreateDate",
        updatedAt: "UpdateDate",
    },
});


/***/ }),

/***/ "./src/api/models/schemas/variable-schema.ts":
/*!***************************************************!*\
  !*** ./src/api/models/schemas/variable-schema.ts ***!
  \***************************************************/
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
exports.VariableSchema = void 0;
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
exports.VariableSchema = new dynamoose.Schema({
    id: {
        type: Number,
        hashKey: true,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    variable: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    typeId: {
        type: Number,
        required: true,
    },
    mean: {
        type: String,
        required: true,
    },
    sk: {
        type: String,
        rangeKey: true,
        required: true
    }
}, {
    timestamps: {
        createdAt: "CreateDate",
        updatedAt: "UpdateDate",
    },
});


/***/ }),

/***/ "./src/api/services/type/dynamodb/dynamodb-type.ts":
/*!*********************************************************!*\
  !*** ./src/api/services/type/dynamodb/dynamodb-type.ts ***!
  \*********************************************************/
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
exports.TypeService = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_dao_1 = __webpack_require__(/*! src/api/dao/dynamodb/type-dao */ "./src/api/dao/dynamodb/type-dao.ts");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let TypeService = class TypeService {
    constructor(typeDao) {
        this.typeDao = typeDao;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.typeDao.create(data);
        });
    }
};
TypeService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.TypeDao)),
    __metadata("design:paramtypes", [type_dao_1.TypeDao])
], TypeService);
exports.TypeService = TypeService;


/***/ }),

/***/ "./src/api/services/variable/dynamodb/dynamodb-variable.ts":
/*!*****************************************************************!*\
  !*** ./src/api/services/variable/dynamodb/dynamodb-variable.ts ***!
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
exports.VariableService = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const type_1 = __webpack_require__(/*! src/ioc/type */ "./src/ioc/type.ts");
let VariableService = class VariableService {
    constructor(variableDao) {
        this.variableDao = variableDao;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.variableDao.create(data);
            console.log('service', result);
            return result;
        });
    }
    getRelationType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.variableDao.getRelationType();
            return result;
        });
    }
    getStartAtLimit(startAt, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.variableDao.getStartAtLimit(startAt, limit);
            return result;
        });
    }
};
VariableService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(type_1.TYPES.VariableDao)),
    __metadata("design:paramtypes", [Object])
], VariableService);
exports.VariableService = VariableService;


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
__webpack_require__(/*! ../api/controllers */ "./src/api/controllers/index.ts");
const type_1 = __webpack_require__(/*! ./type */ "./src/ioc/type.ts");
const dynamoose = __importStar(__webpack_require__(/*! dynamoose */ "dynamoose"));
const variable_dao_1 = __webpack_require__(/*! src/api/dao/dynamodb/variable-dao */ "./src/api/dao/dynamodb/variable-dao.ts");
const dynamodb_variable_1 = __webpack_require__(/*! src/api/services/variable/dynamodb/dynamodb-variable */ "./src/api/services/variable/dynamodb/dynamodb-variable.ts");
const type_dao_1 = __webpack_require__(/*! src/api/dao/dynamodb/type-dao */ "./src/api/dao/dynamodb/type-dao.ts");
const dynamodb_type_1 = __webpack_require__(/*! src/api/services/type/dynamodb/dynamodb-type */ "./src/api/services/type/dynamodb/dynamodb-type.ts");
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
const container = new inversify_1.Container();
// Table
container
    .bind(type_1.TYPES.ModelsProvider)
    .toDynamicValue(() => models_provider_1.ModelsProvider.getInstance())
    .inSingletonScope()
    .onActivation((context, injectable) => {
    // dynamoose.aws.ddb.local('http://localhost:8000');
    const dynamoDBClient = new aws_sdk_1.DynamoDB({
        // region: "local",
        endpoint: "http://localhost:8000",
    });
    dynamoose.aws.ddb.set(dynamoDBClient);
    return injectable;
});
// variable
container
    .bind(type_1.TYPES.VariableModel)
    .toDynamicValue((context) => {
    const modelsProvider = context.container.get(type_1.TYPES.ModelsProvider);
    return modelsProvider.getVariableModel();
})
    .inSingletonScope();
container.bind(type_1.TYPES.VariableDao).to(variable_dao_1.VariableDao);
container.bind(type_1.TYPES.VariableService).to(dynamodb_variable_1.VariableService);
// type
container
    .bind(type_1.TYPES.TypeModel)
    .toDynamicValue((context) => {
    const modelsProvider = context.container.get(type_1.TYPES.ModelsProvider);
    return modelsProvider.getTypeModel();
})
    .inSingletonScope();
container.bind(type_1.TYPES.TypeDao).to(type_dao_1.TypeDao);
container.bind(type_1.TYPES.TypeService).to(dynamodb_type_1.TypeService);
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
    ModelsProvider: Symbol.for("models-provider"),
    // variable
    VariableModel: Symbol.for("variable-model"),
    VariableDao: Symbol.for("variable-dao"),
    VariableService: Symbol.for("variable-service"),
    // type
    TypeModel: Symbol.for("type-model"),
    TypeDao: Symbol.for("type-dao"),
    TypeService: Symbol.for("type-service"),
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