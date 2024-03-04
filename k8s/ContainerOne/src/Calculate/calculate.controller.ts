import { Body, Controller, Post } from "@nestjs/common";
import { CalculateRequest } from "./dto/calculateRequest.dto";
import { CalculateService } from "./calculate.service";

@Controller("calculate")
export class CalculateController {
    constructor(private readonly calculateService: CalculateService){}

    @Post()
    async calculate(@Body() calculteRequestDto: CalculateRequest) {
        return await this.calculateService.calculate(calculteRequestDto);
    }
}