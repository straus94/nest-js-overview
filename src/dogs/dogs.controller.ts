import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put, Query,
    Res
} from '@nestjs/common';
import {UpdateDogDto} from "./dto/update-dog.dto";
import {ListAllEntriesDto} from "./dto/list-all-entries.dto";
import {DogsService} from "./dogs.service";
import {CreateDogDto} from "./dto/create-dog-dto";
import {Dog} from "./interfaces/dog.interface";

@Controller('dogs')
export class DogsController {
    constructor(private  dogsService: DogsService) {
    }

    @Post()
    create(@Body() createDogDto: CreateDogDto) {
        this.dogsService.create(createDogDto)
    }

    @Get()
    async findAllDogs(): Promise<Dog[]> {
        return this.dogsService.findAll()
    }

    @Get(':id')
    findOneDod(@Param() params): string {
        return `This action returns a #${params.id} dog`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto){
        return `This action updates a #${id} dog`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This action removes dog #${id}`;
    }
}
