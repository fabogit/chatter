import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../common/database/abstract.repository';
import { User } from './entities/user.entity';

Injectable();
export class UsersRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UsersRepository.name, {
    timestamp: true,
  });

  constructor(@InjectModel(User.name) userModel: Model<User>) {
    super(userModel);
  }
}
