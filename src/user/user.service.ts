import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    new User('Denis', 18),
    new User('Embun', 3),
    new User('Nuning', 17),
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto.name, createUserDto.age);
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((x) => x.id === id);

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    user.name = updateUserDto.name ?? user.name;
    user.age = updateUserDto.age ?? user.age;

    return user;
  }

  remove(id: string) {
    const user = this.findOne(id);
    this.users = this.users.filter((x) => x.id !== id);
    return user;
  }
}
