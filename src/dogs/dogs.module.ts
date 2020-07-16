import { Module } from '@nestjs/common';
import {DogsController} from "./dogs.controller";
import {DogsService} from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogsService],
    imports: [],
    exports: [DogsService]
})
export class DogsModule {}