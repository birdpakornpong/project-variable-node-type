
import { inject, injectable } from "inversify";
import { controller, httpPost, interfaces, requestBody } from "inversify-express-utils";
import { TYPES } from "src/ioc/type";
import { TypeService } from "../services/type/dynamodb/dynamodb-type";


@controller("/type")
export class Typecontroller implements interfaces.Controller {
    constructor(
        @inject(TYPES.TypeService) private readonly typeService: TypeService
    ) {}

    @httpPost("/create")
    public async create(
        @requestBody() data
    ): Promise<any> {
        try {
            const result = await this.typeService.create(data)
            return result
        } catch (err) {
            console.log('err', err)
        } 
    }
}