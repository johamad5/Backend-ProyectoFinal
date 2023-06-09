import { Router } from 'express';
import adminUserAuthRequired from './Middleware/adminUser.js';
import authRequired from './Middleware/auth.js';
import {
	getAll,
	getOneById,
	getByFilter,
	save,
	updateById,
	deleteById,
	deleteAll,
} from '../Controllers/products.js';

const products = new Router();

products.get('/', authRequired, getAll);
products.get('/:id', adminUserAuthRequired, getOneById);
products.get('/:minPrice/:maxPrice', authRequired, getByFilter);
products.patch('/:id', adminUserAuthRequired, updateById);
products.post('/', adminUserAuthRequired, save);
products.delete('/:id', adminUserAuthRequired, deleteById);
products.delete('/', adminUserAuthRequired, deleteAll);

export default products;
