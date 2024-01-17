import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CalculateRequest } from "./dto/calculateRequest.dto";
import { CalculateSuccessResponse } from "./calculate.interface";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

@Injectable()
export class CalculateService {
    constructor(private readonly httpService: HttpService) {}
    async calculate(calculteRequestDto: CalculateRequest): Promise<CalculateSuccessResponse>{
        try {
            if(!calculteRequestDto.file)
                throw {
                    data: {
                        file: null,
                        error: "Invalid JSON input."
                    },
                    status: HttpStatus.BAD_REQUEST
                };
            const { data }  = await firstValueFrom(
                this.httpService.post<CalculateSuccessResponse>(`http://${process.env.CONTAINER_TWO_HOST}:${process.env.CONTAINER_TWO_PORT}/process`, calculteRequestDto).pipe(
                    catchError((error: AxiosError) => {
                        throw {
                            data: error.response.data,
                            status: error.response.status
                        };
                    })
                )
            )
            return data;
        }catch(error) {
            console.error(error)
            throw new HttpException(error.data, error.status);
        }
    }
}