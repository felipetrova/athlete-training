import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    private users = [
        { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
        { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
        { id: 3, name: 'Carol Davis', email: 'carol@example.com' },
    ];

    // GET /users
    @Get()
    findAll() {
        return this.users;
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        const user = this.users.find(u => u.id === Number(id));
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

}
