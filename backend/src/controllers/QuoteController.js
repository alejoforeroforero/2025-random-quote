import Quote from '../models/Quote.js';
import { sequelize } from '../config/database.js';

export const QuoteController = {
  async getAllQuotes(req, res) {
    try {
      const quotes = await Quote.findAll();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getRandomQuote(req, res) {
    try {
      const quote = await Quote.findOne({
        order: sequelize.random()
      });
      res.json(quote);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createQuote(req, res) {
    try {
      const { text, author } = req.body;
      const quote = await Quote.create({ text, author });
      res.status(201).json(quote);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateQuote(req, res) {
    try {
      const { id } = req.params;
      const { text, author } = req.body;
      const quote = await Quote.findByPk(id);
      
      if (!quote) {
        return res.status(404).json({ error: 'Quote not found' });
      }

      await quote.update({ text, author });
      res.json(quote);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteQuote(req, res) {
    try {
      const { id } = req.params;
      const quote = await Quote.findByPk(id);
      
      if (!quote) {
        return res.status(404).json({ error: 'Quote not found' });
      }

      await quote.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
