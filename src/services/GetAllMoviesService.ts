import { getRepository } from 'typeorm';

import { Movies } from '../entities/Movies';

class GetAllMoviesService {
  async execute() {
    const repo = getRepository(Movies);

    const movies = await repo.find();

    return movies;
  }
}

export { GetAllMoviesService };
