import { HttpException, Injectable } from "@nestjs/common";
import { StoreFileRequest } from "./dto/storeFileRequest.dto";
import { StoreFileResponse } from "./dto/storeFileResponse.dto";
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class StoreFileService {
    async storeFile(StoreFileRequest: StoreFileRequest): Promise<StoreFileResponse> {
        const outputDir = process.env.OUT_DIR || path.join(__dirname, 'out');
        // Create the output directory if it doesn't exist

        if(!StoreFileRequest.file){
            throw new HttpException({
                "file": null,
                error: "Invalid JSON input."
            }, 404);
        }

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        const filePath = process.env.FILE_STORE_PATH || path.join(outputDir, StoreFileRequest.file);
        try {
            // Write the content to the file, automatically creating or overwriting it
            fs.writeFileSync(filePath, StoreFileRequest.data, 'utf8');
            return {
                file: StoreFileRequest.file,
                message: "Success."
            };
          } catch (error) {
            console.error('Error writing file:', error);
            throw new HttpException({
                "file": StoreFileRequest.file,
                error: "Error while storing the file to the storage."
            }, 500);
          }
    }
}