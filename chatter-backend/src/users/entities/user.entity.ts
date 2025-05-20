import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from '../../common/database/abstract.entity';

// Single model for mongodb and GraphQL
@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()
  email: string;

  // excluded as GraphQL field for security
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
