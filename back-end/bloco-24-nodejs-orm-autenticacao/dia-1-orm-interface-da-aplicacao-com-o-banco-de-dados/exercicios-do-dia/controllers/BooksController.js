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

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BooksService.create({ title, author, pageQuantity });
  return res.status(201).json(book);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BooksService.update({ title, author, pageQuantity, id });
  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  return res.status(201).json({message: 'Book updated'});
}

module.exports = {
  getAll,
  getById,
  create,
  update,
}
