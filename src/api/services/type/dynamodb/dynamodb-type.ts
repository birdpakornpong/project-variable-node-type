import { inject, injectable } from "inversify";
import { TypeDao } from "src/api/dao/dynamodb/type-dao";
import { TYPES } from "src/ioc/type";
import { ITypeService } from "../type-service";


@injectable()
export class TypeService implements ITypeService {
    constructor(
        @inject(TYPES.TypeDao) private readonly typeDao: TypeDao
    ) {}
    
    async create(data) {
        return this.typeDao.create(data);
    }
}