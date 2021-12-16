import { getRepository } from 'typeorm';

import { Category } from '../entities/Category';

interface IRequest {
  id: string;
  name: string;
  description: string;
}

class UpdateCategoryService {
  async execute({ id, name, description }: IRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error('Category doest not exists');
    }

    category.name = name || category.name;

    category.description = description || category.description;

    await repo.save(category);

    return category;
  }
}

export { UpdateCategoryService };
