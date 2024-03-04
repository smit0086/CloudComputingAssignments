import { Body, Controller, Post } from "@nestjs/common";
import { StoreFileService } from "./storeFile.service";
import { StoreFileRequest } from "./dto/storeFileRequest.dto";

@Controller("store-file")
export class StoreFileController {
    constructor(private readonly storeFileService: StoreFileService) {}
    @Post()
    async storeFile(@Body() storeFileRequest: StoreFileRequest){
        return await this.storeFileService.storeFile(storeFileRequest);
    }
}