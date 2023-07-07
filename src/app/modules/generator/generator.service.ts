import { BluePrintService } from '../bluePrint/bluePrint.service';
import { IGenerator } from './generator.interface';
import { Generator } from './generator.model';

const getGenerators = async (): Promise<IGenerator[] | null> => {
  const result = await Generator.find({})
    .populate('author')
    .populate('contributors')
    .populate('bluePrint');

  return result;
};

const getSingleGenerator = async (id: string): Promise<IGenerator | null> => {
  const result = await Generator.findById(id)
    .populate('author')
    .populate('contributors')
    .populate('bluePrint');

  return result;
};

const createGenerator = async (
  payload: IGenerator
): Promise<IGenerator | null> => {
  const bluePrintResult = await BluePrintService.createBluePrint({});
  const result = await Generator.create({
    ...payload,
    bluePrint: bluePrintResult._id,
  });

  await result.populate('author');
  await result.populate('contributors');
  await result.populate('bluePrint');
  return result;
};

const updateGenerator = async (
  id: string,
  payload: Partial<IGenerator>
): Promise<IGenerator | null> => {
  const result = await Generator.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteGenerator = async (id: string): Promise<IGenerator | null> => {
  const result = await Generator.findByIdAndDelete({ _id: id });
  return result;
};

export const GeneratorService = {
  getGenerators,
  getSingleGenerator,
  updateGenerator,
  createGenerator,
  deleteGenerator,
};
