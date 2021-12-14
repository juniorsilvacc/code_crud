import { Request, Response } from 'express';

import { GetAllMoviesService } from '../services/GetAllMoviesService';

class GetAllMoviesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllMoviesService();

    const movies = await service.execute();

    return response.json(movies);
  }
}

export { GetAllMoviesController };
