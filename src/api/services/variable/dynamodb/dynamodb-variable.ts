import { inject, injectable } from "inversify";
import { IVariableDao } from "src/api/dao/variable.dao";
import { TYPES } from "src/ioc/type";
import { IVariableService } from "../variable-service";

@injectable() 
export class VariableService implements IVariableService {
    constructor(
        @inject(TYPES.VariableDao) private readonly variableDao: IVariableDao
    ) {}

    public async create(data) {
        const result = await this.variableDao.create(data);
        console.log('service', result)
        return result
    }
}