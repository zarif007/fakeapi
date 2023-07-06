import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IGenerator } from './generator.interface';
import { GeneratorService } from './generator.service';

const getGenerators = catchAsync(async (req, res) => {
  const result = await GeneratorService.getGenerators();
  sendResponse<IGenerator[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Generators fetched successfully !',
    data: result,
  });
});

const getSingleGenerator = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await GeneratorService.getSingleGenerator(id);
  sendResponse<IGenerator>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Generator fetched successfully !',
    data: result,
  });
});

const createGenerator = catchAsync(async (req, res) => {
  const generator = req.body;
  const result = await GeneratorService.createGenerator(generator);
  sendResponse<IGenerator>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Generator created successfully !',
    data: result,
  });
});

const updateGenerator = catchAsync(async (req, res) => {
  const Generator = req.body;
  const { id } = req.params;
  const result = await GeneratorService.updateGenerator(id, Generator);
  sendResponse<IGenerator>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Generator updated successfully !',
    data: result,
  });
});

export const GeneratorController = {
  getGenerators,
  getSingleGenerator,
  createGenerator,
  updateGenerator,
};
