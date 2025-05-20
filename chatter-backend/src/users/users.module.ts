import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { User, UserSchema } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
