import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CalculateRequest } from "./dto/calculateRequest.dto";
import { CalculateSuccessResponse } from "./calculate.interface";

@Injectable()
export class CalculateService {
    async calculate(calculteRequestDto: CalculateRequest): Promise<CalculateSuccessResponse>{
        try {
            return {
                file: calculteRequestDto.file,
                sum: 0
            }
        }catch(error) {
            throw new HttpException("Error calculating!", HttpStatus.BAD_REQUEST);
        }
    }
}