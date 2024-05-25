import { UpdateRolDto } from '../rol/updaterol.dto';

export class UpdateUserDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: UpdateRolDto[];
}
