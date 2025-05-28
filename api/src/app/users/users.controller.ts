import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private users = [
    {
      id: 1,
      firstname: 'Felipe',
      lastname: 'Trova',
      email: 'test@example.com',
      profile_medium:
        'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9325798/2821041/11/medium.jpg',
    },
    {
      id: 2,
      firstname: 'Bob',
      lastname: 'Johnson',
      email: 'bob@example.com',
      profile_medium:
        'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9325798/2821041/11/medium.jpg',
    },
    {
      id: 3,
      firstname: 'Carol',
      lastname: 'Davis',
      email: 'carol@example.com',
      profile_medium:
        'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9325798/2821041/11/medium.jpg',
    },
  ];

  // GET /users
  @Get()
  findAll() {
    return this.users;
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.users.find((u) => u.id === Number(id));
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}
