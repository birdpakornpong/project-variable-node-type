
import { inject } from "inversify";
import { controller, httpPost, interfaces, requestBody } from "inversify-express-utils";
import { TYPES } from "src/ioc/type";
import { VariableService } from "../services/variable/dynamodb/dynamodb-variable";


@controller("/variable")
export class VariableController implements interfaces.Controller {
    constructor(
        @inject(TYPES.VariableService) private variableService: VariableService
    ) {}

    @httpPost("/create")
    public async create(
        @requestBody() data
    ): Promise<void> {
        try {
            const result = await this.variableService.create(data);
            return result
        } catch (err) {
            console.log('err', err)
        } 
    }
}