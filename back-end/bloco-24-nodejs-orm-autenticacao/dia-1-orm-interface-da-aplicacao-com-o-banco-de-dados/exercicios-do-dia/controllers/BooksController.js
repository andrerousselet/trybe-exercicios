const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();
  return res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
}

module.exports = {
  getAll,
  getById
}
