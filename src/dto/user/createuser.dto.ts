import { CreateRolDto } from '../rol/createrol.dto';

export class CreateUserDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: CreateRolDto[];
}
