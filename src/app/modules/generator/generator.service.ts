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

export const GeneratorService = {
  getGenerators,
  getSingleGenerator,
};
