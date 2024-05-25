import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CreateRolDto } from 'src/dto/rol/createrol.dto';
import { UpdateRolDto } from 'src/dto/rol/updaterol.dto';
import { RolService } from 'src/service/rol/rol.service';

@Controller('rol')
export class RolController {
  constructor(private rolService: RolService) {}

  @Get()
  getUsers() {
    return this.rolService.getRoles();
  }

  @Post()
  createUser(@Body() createRolDto: CreateRolDto) {
    return this.rolService.createRol(createRolDto);
  }

  @Put(':id')
  async updateRol(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRolDto: UpdateRolDto,
  ) {
    await this.rolService.updateRol(id, updateRolDto);
  }

  @Delete(':id')
  async deleteRol(@Param('id', ParseIntPipe) id: number) {
    await this.rolService.deleteRol(id);
  }
}
