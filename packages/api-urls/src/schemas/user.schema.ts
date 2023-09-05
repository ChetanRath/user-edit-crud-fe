import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: 1 })
  active: boolean;

  @Prop()
  nickname: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop({ default: new Date() })
  createdAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
