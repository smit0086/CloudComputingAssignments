import { Body, Controller, Post } from "@nestjs/common";
import { ProcessRequest } from "./dto/processRequest.dto";
import { ProcessService } from "./process.service";

@Controller("process")
export class ProcessController {
    constructor(private readonly processService: ProcessService){}

    @Post()
    async calculate(@Body() processRequestDto: ProcessRequest) {
        return await this.processService.calculate(processRequestDto);
    }
}