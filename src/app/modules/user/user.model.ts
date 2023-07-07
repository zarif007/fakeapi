import { Schema, model } from 'mongoose';
import { userRoles } from './user.constant';
import { IUser, IUserModel } from './user.interface';

const UserSchema = new Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    role: {
      type: String,
      enum: userRoles,
      default: 'user',
    },
    image: {
      type: String,
      default:
        'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg',
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    generators: {
      type: [Schema.Types.ObjectId],
      ref: 'Generator',
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, IUserModel>('User', UserSchema);
