import { getRepository } from 'typeorm';

import { Category } from '../entities/Category';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  async execute({ name, description }: IRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    if (await repo.findOne({ name })) {
      return new Error('Category already exists');
    }

    const category = repo.create({
      name,

      description,
    });

    await repo.save(category);

    return category;
  }
}

export { CreateCategoryService };
