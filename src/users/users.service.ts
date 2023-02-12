import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'klaus', email: 'klaus@gmail.com', password: 'password' },
    { username: 'koko', email: 'koko@gmail.com', password: 'password' },
    { username: 'kory', email: 'kory@gmail.com', password: 'password' }
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userdetails: CreateUserType){
   return this.fakeUsers.push(userdetails)

  }

  fetchUserById(id: number){
    return {id: 1, username: 'mamamia', email: 'mamamia@gmail.com'}
  }
}
