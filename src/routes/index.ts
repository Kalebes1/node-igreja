import { Router } from 'express';
import * as PageController from '../controllers/pageController'

const router = Router();

router.get('/programacao', PageController.programacao);
router.get('/eventos', PageController.eventos);  
router.get('/localizacao', PageController.localizacao); 

export default router;