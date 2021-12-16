import { getRepository } from 'typeorm';

import { Category } from '../entities/Category';

class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}

export { GetAllCategoriesService };
