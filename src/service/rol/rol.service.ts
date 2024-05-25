import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolEntity } from 'src/entities/rol/rol.entity';
import { CreateRolParams, UpdateRolParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity)
    private rolRepository: Repository<RolEntity>,
  ) {}

  getRoles() {
    return this.rolRepository.find();
  }

  createRol(rolDetails: CreateRolParams) {
    const newRol = this.rolRepository.create({
      ...rolDetails,
      createdAt: new Date(),
    });
    return this.rolRepository.save(newRol);
  }

  updateRol(id: number, updateRolDetails: UpdateRolParams) {
    return this.rolRepository.update({ id }, { ...updateRolDetails });
  }

  deleteRol(id: number) {
    return this.rolRepository.delete(id);
  }
}
