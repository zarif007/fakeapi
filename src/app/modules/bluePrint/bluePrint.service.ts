import { IBluePrint } from './bluePrint.interface';
import { BluePrint } from './bluePrint.model';

const createBluePrint = async (payload: IBluePrint | object) => {
  const result = await BluePrint.create(payload);
  return result;
};

const updateBluePrint = async (
  id: string,
  payload: Partial<IBluePrint>
): Promise<IBluePrint | null> => {
  const result = await BluePrint.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBluePrint = async (id: string): Promise<IBluePrint | null> => {
  const result = await BluePrint.findByIdAndDelete({ _id: id });
  return result;
};

export const BluePrintService = {
  createBluePrint,
  updateBluePrint,
  deleteBluePrint,
};
