import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BluePrintService } from './bluePrint.service';
import { IBluePrint } from './bluePrint.interface';

const createBluePrint = catchAsync(async (req, res) => {
  const bluePrint = req.body;
  const result = await BluePrintService.createBluePrint(bluePrint);
  sendResponse<IBluePrint>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blue Print created successfully !',
    data: result,
  });
});

const updateBluePrint = catchAsync(async (req, res) => {
  const bluePrint = req.body;
  const { id } = req.params;
  const result = await BluePrintService.updateBluePrint(id, bluePrint);
  sendResponse<IBluePrint>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blue Print updated successfully !',
    data: result,
  });
});
export const BluePrintController = {
  createBluePrint,
  updateBluePrint,
};
