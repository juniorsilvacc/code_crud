import { Request, Response } from 'express';

import { GetAllCategoriesService } from '../services/GetAllCategoriesService';

class GetAllCategoriesController {
  async handle(Request: Request, response: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}

export { GetAllCategoriesController };
