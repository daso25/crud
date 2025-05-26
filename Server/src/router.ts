import { Router } from 'express';
import { createProduct } from './handlers/product';

const router = Router();

//Routing
router.get('/', (req, res) => {
  res.send('Hello World!');
});

//CREAR PRODUCTO
router.post('/', createProduct);



export default router;