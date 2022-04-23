import { AnyDocument } from "dynamoose/dist/Document";
import { ModelType } from "dynamoose/dist/General";
import { inject, injectable } from "inversify";
import { TYPES } from "src/ioc/type";
import { IVariableDao } from "../variable.dao";
import { v4 as uuidv4 } from "uuid";

@injectable()
export class VariableDao implements IVariableDao {
    constructor(
        @inject(TYPES.VariableModel)
        private readonly variableModel: ModelType<AnyDocument>
    ) {}

    private async lengthTable() {
        const length = await this.variableModel.scan().count().exec();
        return length
    }

    public async create(data): Promise<any> {
        const { count } = await this.lengthTable()
        try {
            const result = await this.variableModel.create({
                id: Number(count) + 1,
                userId: data.userId,
                variable: data.variable,
                description: data.description,
                typeId: data.typeId,
                mean: data.mean,
                sk: data.sk,
            });
            return result; 
        } catch (err) {
            console.log('err', err)
        }       
    }
}