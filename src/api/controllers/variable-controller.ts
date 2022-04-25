
import { inject } from "inversify";
import { controller, httpGet, httpPost, interfaces, queryParam, requestBody, requestParam } from "inversify-express-utils";
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

    @httpGet("/getType") // test
    public async getRelationType() {
        try {
            const result = await this.variableService.getRelationType();
            return result
        } catch (err) {
            console.log('err', err)
        }
    }

    @httpGet("getStart")
    public async getStartAll(
        @queryParam("startAt") startAt, // ?startAt=10
        @queryParam("limit") limit, // limit=10
    ) {
        try {
            const result = await this.variableService.getStartAtLimit(startAt, limit);
            return result;
        } catch (err) {
            console.log('err',err)
        }
    }
}