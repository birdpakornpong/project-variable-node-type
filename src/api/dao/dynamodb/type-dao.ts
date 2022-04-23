import { AnyDocument } from "dynamoose/dist/Document";
import { ModelType } from "dynamoose/dist/General";
import { inject, injectable } from "inversify";
import { TYPES } from "src/ioc/type";
import { ITypeDao } from "../type.dao";

@injectable()
export class TypeDao implements ITypeDao {
    constructor(
        @inject(TYPES.TypeModel) private readonly typeModel: ModelType<AnyDocument>
    ) {}

    private async lengthTable() {
        const length = await this.typeModel.scan().count().exec();
        return length
    }
    public async create(data) {
        const { count } = await this.lengthTable()
        try {
            const result = await this.typeModel.create({
                id: Number(count) + 1,
                name: data.name,
                description: data.description,
                sk: data.sk,
            });
            return result; 
        } catch (err) {
            console.log('err', err)
        }  
    }
}