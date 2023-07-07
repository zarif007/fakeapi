import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';
import { IUser } from './user.interface';

const getSingleUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserService.getSingleUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully !',
    data: result,
  });
});

const createUser = catchAsync(async (req, res) => {
  const User = req.body;
  const result = await UserService.createUser(User);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully !',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const User = req.body;
  const { id } = req.params;
  const result = await UserService.updateUser(id, User);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully !',
    data: result,
  });
});

export const UserController = {
  getSingleUser,
  createUser,
  updateUser,
};
