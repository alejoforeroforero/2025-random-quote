import express from 'express';
import { QuoteController } from '../controllers/QuoteController.js';

const router = express.Router();

router.get('/', QuoteController.getAllQuotes);
router.get('/random', QuoteController.getRandomQuote);
router.post('/', QuoteController.createQuote);
router.put('/:id', QuoteController.updateQuote);
router.delete('/:id', QuoteController.deleteQuote);

export default router;
