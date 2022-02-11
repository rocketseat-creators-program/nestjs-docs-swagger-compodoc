import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * CRUD service for managing user entities.
 * It also provides a function to generate new passwords for users.
 */
@Injectable()
export class UsersService {
  /**
   * Creates a new user from a DTO.
   * @param createUserDto The DTO containing the user data.
   * @returns {User} The created user.
   */
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
