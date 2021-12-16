import { Router } from 'express';

import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateMovieController } from './controllers/CreateMovieController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { GetAllMoviesController } from './controllers/GetAllMoviesController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);

routes.get('/categories', new GetAllCategoriesController().handle);

routes.delete('/categories/:id', new DeleteCategoryController().handle);

routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/movie', new CreateMovieController().handle);

routes.get('/movie', new GetAllMoviesController().handle);

export { routes };
