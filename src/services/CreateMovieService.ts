import { getRepository } from 'typeorm';

import { Category } from '../entities/Category';
import { Movies } from '../entities/Movies';

interface IRequest {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

class CreateMovieService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: IRequest): Promise<Movies | Error> {
    const repo = getRepository(Movies);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error('Category doest not exists');
    }

    const movie = repo.create({ name, description, duration, category_id });

    await repo.save(movie);

    return movie;
  }
}

export { CreateMovieService };
