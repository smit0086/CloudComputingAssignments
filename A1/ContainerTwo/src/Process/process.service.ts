import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {promises as fs} from 'fs'; 
import { ProcessRequest } from "./dto/processRequest.dto";
import { ProcessSuccessResponse } from "./process.interface";
import { parse } from "csv-parse";
import * as path from "path";

@Injectable()
export class ProcessService {
    async calculate(processRequestDto: ProcessRequest): Promise<ProcessSuccessResponse>{
        const DIR_PATH = process.env.DIR_PATH;
        const FILE_PATH = path.join(DIR_PATH, processRequestDto.file);
        let sum = 0;
        let content;
        try {
            try {
                content = await fs.readFile(FILE_PATH, 'utf8');
            }catch(error) {
                throw {
                    data: {
                        file: processRequestDto.file,
                        error: "File not found."
                    },
                    status: HttpStatus.BAD_REQUEST
                };
            }
            const records = parse(content, {bom: true});
            try {
                sum = await records.reduce((acc, record) => {
                    if(record[0] === processRequestDto.product)
                        acc += parseInt(record[1]);
                    return acc;
                }, 0);
            }catch(error) {
                throw {
                    data: {
                        file: processRequestDto.file,
                        error: "Input file not in CSV format."
                    },
                    status: HttpStatus.BAD_REQUEST
                };
            }
            return {
                file: processRequestDto.file,
                sum
            }
        }catch(error) {
            throw new HttpException(error.data, error.status);
        }
    }
}